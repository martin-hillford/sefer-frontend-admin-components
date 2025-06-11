import { useTheme } from 'styled-components';
import { False } from '../../icons/False';
import { True } from '../../icons/True';

interface Props {
    value : boolean,
    colored? : boolean,
    size? : number
}

export const Boolean = (props : Props) => {
    const { value, colored = false, size = 40 } = props;
    const theme = useTheme();

    let color = 'inherit';
    if (colored && value) color = theme.colors?.success;
    if (colored && !value) color = theme.colors?.error;

    return (
        <span style={{ color }}>
      {value ? <True size={size} /> : <False size={size} />}
    </span>
    );
};
