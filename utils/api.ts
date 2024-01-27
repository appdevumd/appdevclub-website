const BASE_URL = "https://script.google.com/macros/s/AKfycbwQAccIFOSSu_MI32o6lmkCXu5qHpyJlUpZ2-0teZY-xgvRNuScXEjrMKN6Yg2K0Vks/exec";
type Method = "get" | "post" | "patch" | "put" | "delete";

const fetcherFn = (method: Method) => (endpoint: string, body?: object) => {
    let res_options = endpoint.includes('create_testimonial') ? { cache: 'no-store' } : { revalidate: 600 };
    const res = fetch(`${BASE_URL}${endpoint}`, {
        method,
        body: typeof body === "object" ? JSON.stringify(body) : undefined,
        next: res_options
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