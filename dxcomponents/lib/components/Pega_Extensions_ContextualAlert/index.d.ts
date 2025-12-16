/// <reference types="react" />
import type { PConnFieldProps } from './PConnProps';
import './create-nonce';
type AlertType = 'urgent' | 'info' | 'warning' | 'success';
interface PegaExtensionsContextualAlertProps extends PConnFieldProps {
    type: AlertType;
    title: string;
    message: string;
}
declare const _default: (props: PegaExtensionsContextualAlertProps) => JSX.Element;
export default _default;
//# sourceMappingURL=index.d.ts.map