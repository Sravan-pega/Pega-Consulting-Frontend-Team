import { useState } from 'react';
import {
  Input,
  FieldValueList,
  Text,
  withConfiguration
} from '@pega/cosmos-react-core';

import type { PConnFieldProps } from './PConnProps';
import './create-nonce';

import StyledPegaExtensionsMaskedWithEyeInputWrapper from './styles';

// interface for props
interface PegaExtensionsMaskedWithEyeInputProps extends PConnFieldProps {
  variant?: any;
  defaultMasked?: boolean;
}

// interface for StateProps object
interface StateProps {
  value: string;
}
function PegaExtensionsMaskedWithEyeInput(props: PegaExtensionsMaskedWithEyeInputProps) {
  const { 
    getPConnect, 
    value, 
    placeholder, 
    disabled = false, 
    displayMode, 
    readOnly = false, 
    required = false, 
    label, 
    hideLabel = false, 
    testId, 
    variant = 'inline',
    defaultMasked = true 
  } = props;

  const pConn = getPConnect();
  const actions = pConn.getActionsApi();
  const stateProps = pConn.getStateProps() as StateProps;
  const propName: string = stateProps.value;

  // State for managing masked/unmasked toggle
  const [isTextMasked, setIsTextMasked] = useState(defaultMasked);

  const handleOnChange = (event: any) => {
    const { value: updatedValue } = event.target;
    actions.updateFieldValue(propName, updatedValue);
  };

  const toggleMasking = () => {
    setIsTextMasked(!isTextMasked);
  };

  const handleEyeKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleMasking();
    }
  };

  if (displayMode === 'LABELS_LEFT' || displayMode === 'DISPLAY_ONLY') {
    const displayComp = value || <span aria-hidden='true'>&ndash;&ndash;</span>;
    return displayMode === 'DISPLAY_ONLY' ? (
      <StyledPegaExtensionsMaskedWithEyeInputWrapper> {displayComp} </StyledPegaExtensionsMaskedWithEyeInputWrapper>
    ) : (
      <StyledPegaExtensionsMaskedWithEyeInputWrapper>
        <FieldValueList
          variant={hideLabel ? 'stacked' : variant}
          data-testid={testId}
          fields={[{ id: '1', name: hideLabel ? '' : label, value: displayComp }]}
        />
      </StyledPegaExtensionsMaskedWithEyeInputWrapper>
    );
  }

  if (displayMode === 'STACKED_LARGE_VAL') {
    const isValDefined = typeof value !== 'undefined' && value !== '';
    const val = isValDefined ? (
      <Text variant='h1' as='span'>
        {value}
      </Text>
    ) : (
      ''
    );
    return (
      <StyledPegaExtensionsMaskedWithEyeInputWrapper>
        <FieldValueList
          variant='stacked'
          data-testid={testId}
          fields={[{ id: '2', name: hideLabel ? '' : label, value: val }]}
        />
      </StyledPegaExtensionsMaskedWithEyeInputWrapper>
    );
  }

  return (
    <StyledPegaExtensionsMaskedWithEyeInputWrapper>
      <div className="masked-input-container">
        <Input
          type={isTextMasked ? 'password' : 'text'}
          value={value}
          label={label}
          labelHidden={hideLabel}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          onChange={handleOnChange}
          testId={testId}
        />
        <button
          type="button"
          className="eye-toggle-button"
          onClick={toggleMasking}
          onKeyDown={handleEyeKeyDown}
          aria-label={isTextMasked ? 'Show text' : 'Hide text'}
          aria-pressed={!isTextMasked}
          disabled={disabled || readOnly}
          tabIndex={disabled || readOnly ? -1 : 0}
        >
          <span className="eye-icon" role="img" aria-hidden="true">
            {isTextMasked ? '👁️' : '🙈'}
          </span>
        </button>
      </div>
    </StyledPegaExtensionsMaskedWithEyeInputWrapper>
  );
}

export default withConfiguration(PegaExtensionsMaskedWithEyeInput);
