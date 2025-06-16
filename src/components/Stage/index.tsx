import { useAvailableLanguage } from "../../hooks/useAvailableLanguage";
import { terms } from "./terms";

export const Stage = (props : {stage : string, withTooltip? : boolean}) => {
  const { withTooltip, stage } = props;
  const language = useAvailableLanguage();
  const labels = terms[language];

  switch (stage) {
    case 'Edit': return <StageBlock label={labels.edit} withTooltip={withTooltip} />;
    case 'Test': return <StageBlock label={labels.test} withTooltip={withTooltip} />;
    case 'Published': return <StageBlock label={labels.published} withTooltip={withTooltip} />;
    case 'Closed': return <StageBlock label={labels.closed} withTooltip={withTooltip} />;
    default: return null;
  }
};

const StageBlock = (props : {label : string, withTooltip? : boolean}) => {
  const { withTooltip, label } = props;
  if (!withTooltip) return <>{label}</>;
  return <>{label} </>;
};
