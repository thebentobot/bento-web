export interface Toast {
    id: number;
    message: string;
    type: "success" | "error";
}

let nextId = 0;
export const toasts = $state<Toast[]>([]);

export function addToast(message: string, type: Toast["type"] = "success") {
    const id = nextId++;
    toasts.push({ id, message, type });
    setTimeout(() => removeToast(id), 4000);
}

export function removeToast(id: number) {
    const idx = toasts.findIndex((t) => t.id === id);
    if (idx !== -1) toasts.splice(idx, 1);
}
