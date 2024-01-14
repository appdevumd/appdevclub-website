const BASE_URL = "https://script.google.com/macros/s/AKfycby7Y4vFoa0pNeaoJ2An65Y_N3yg-OrVxTvz8ba3rlZThw4gvSnS4eSJ81U4MXIHYM4W/exec";
type Method = "get" | "post" | "patch" | "put" | "delete";

const fetcherFn = (method: Method) => (endpoint: string, body?: object) => {
    const res = fetch(`${BASE_URL}${endpoint}`, {
        method,
        headers: {
            "Content-Type": "application/json"
        },
        body: typeof body === "object" ? JSON.stringify(body) : undefined,
    });

    return {
        text: async () => (await res).text(),
        json: async <T extends object>() => (await res).json() as T,
    };
};

const methods: Method[] = ["get" , "post" , "patch" , "put" , "delete"];

const api = {} as Record<Method, (endpoint: string, body?: object) => {
    text(): Promise<string>,
    json<T extends object>(): Promise<T> 
}>;

for (let method of methods) {
    api[method] = (endpoint, body) => fetcherFn(method)(endpoint, body);
}

export { api };