export class NET {
    async load(url) {
        const res = await fetch(url);
        return await res.json();
    }

    async send(url, data) {
        const res = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
        return await res.json();
    }
}
