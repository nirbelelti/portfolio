export interface Picture {
    src: string;
    width: number;
    height: number;
    alt: string;
}

export interface StepperView extends Picture {
    id: string;
    label: string;
    kind: string;
    question: string;
    answer: string;
    highlight?: string;
}
