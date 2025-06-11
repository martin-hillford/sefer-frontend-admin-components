import { Loading, Property, Signal } from '../';
import styled from 'styled-components';

interface Props {
  lesson? : { content: { isMarkDownContent: boolean | undefined | null }[]},
  state?: string | number | undefined | null
  maxWidth? : boolean
}

export const ContentState = (props : Props) => {
  const { maxWidth } = props;
  const result = getSate(props);

  return (
    <Property maxWidth={maxWidth} label="Mark Down">
      <ContentStateIndicator state={result} />
    </Property>
  );
};


export const ContentStateIndicator = (props : {state? : string | number | undefined | null}) => {
  const { state } = props;
  switch (state) {
    case "Html":
    case 3:
      return <Signal state="red" />;
    case "MarkDown":
    case 1:
      return <Signal state="green" />;
    case "Mixed":
    case 2:
      return <Signal state="orange" />;
    default: return <Left><Loading variant="small" /></Left>;
  }
};

const getSate = (props: Props) => {
  const { state, lesson } = props;
  if (state) return state;
  if (!lesson) return null;

  if (lesson.content.length === 0) return "Html";

  const merged = lesson.content.map(c => c.isMarkDownContent);
  const markdown = merged.filter(c => c);

  if (merged.length === markdown.length) return "MarkDown";
  if (markdown.length === 0) return "Html";
  return "Mixed";
};

const Left = styled.div`
    width: 24px;
`;
