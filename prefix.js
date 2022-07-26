const debug = process.env.NODE_ENV !== "production";

const prefix = !debug ? "/types" : "";

export { prefix };
