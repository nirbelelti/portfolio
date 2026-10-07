import Icon from './Icon.tsx';

const PrintResumeButton = () => (
    <button type="button" className="text-button print-resume" onClick={() => window.print()}>
        <Icon name="printer"/>
        Save résumé as PDF
    </button>
);

export default PrintResumeButton;
