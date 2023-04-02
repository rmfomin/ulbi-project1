import {ResolveOptions} from "webpack";

export function buildResolvers(): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'], // позволяет не писать при импортах расширения файлов (1)
    }
}