const BASE_URL = "https://script.google.com/macros/s/AKfycby9hJ55qmaAEgOdrXRvZxna3EoeBzDcuXMmgaxBL2uHGQZlW8_TZwywvsqgV38xPoVt/exec";
type Method = "get" | "post" | "patch" | "put" | "delete";

const fetcherFn = (method: Method) => (endpoint: string, body?: object) => fetch(`${BASE_URL}${endpoint}`, {
    method,
    headers: {
        "Content-Type": "application/json"
    },
    body: typeof body === "object" ? JSON.stringify(body) : undefined,
});

const methods: Method[] = ["get" , "post" , "patch" , "put" , "delete"];

const api = {} as Record<Method, (endpoint: string, body?: object) => Promise<Response>>;

for (let method of methods) {
    api[method] = (endpoint, body) => fetcherFn(method)(endpoint, body);
}

export { api };