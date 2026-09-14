export declare class Section<T> {
    private items;
    private renderer;
    private container;
    constructor({ items, renderer }: {
        items: T[];
        renderer: (item: T) => void;
    }, containerSelector: string);
    renderItems(): void;
    addItem(element: HTMLElement): void;
}
//# sourceMappingURL=Section.d.ts.map