declare module 'next' {
  import type { ComponentType } from 'react';
  export type Metadata = any;
  export type NextPage<P = {}, IP = P> = ComponentType<P>;
  export interface NextConfig {
    [key: string]: any;
  }
  export default function next(options?: any): any;
}

declare module 'next/link' {
  import type { ComponentProps, ForwardRefExoticComponent } from 'react';
  import type { UrlObject } from 'url';
  type Url = string | UrlObject;
  export interface LinkProps extends Omit<ComponentProps<'a'>, 'href'> {
    href: Url;
    as?: Url;
    replace?: boolean;
    scroll?: boolean;
    shallow?: boolean;
    passHref?: boolean;
    prefetch?: boolean;
    locale?: string | false;
  }
  const Link: ForwardRefExoticComponent<LinkProps>;
  export default Link;
}

declare module 'next/image' {
  import type { ComponentProps } from 'react';
  export interface ImageProps extends Omit<ComponentProps<'img'>, 'src' | 'width' | 'height'> {
    src: string | any;
    alt: string;
    width?: number | `${number}`;
    height?: number | `${number}`;
    fill?: boolean;
    quality?: number | `${number}`;
    priority?: boolean;
    loading?: 'lazy' | 'eager';
    placeholder?: 'blur' | 'empty';
    blurDataURL?: string;
    unoptimized?: boolean;
  }
  export default function Image(props: ImageProps): any;
}

declare module 'next/font/google' {
  export interface FontOptions {
    weight?: string | string[];
    style?: string | string[];
    subsets?: string[];
    display?: string;
    preload?: boolean;
    fallback?: string[];
    adjustFontFallback?: boolean;
    variable?: string;
  }
  export interface FontObject {
    className: string;
    style: { fontFamily: string; fontWeight?: number; fontStyle?: string };
    variable: string;
  }
  export function Inter(options?: FontOptions): FontObject;
  export function IBM_Plex_Mono(options?: FontOptions): FontObject;
  export function Manrope(options?: FontOptions): FontObject;
}

declare module 'next/navigation' {
  export function useRouter(): any;
  export function usePathname(): string;
  export function useSearchParams(): any;
  export function useParams(): any;
  export function notFound(): never;
  export function redirect(url: string): never;
}

declare module 'next/server' {
  export class NextResponse extends Response {
    static json(body: any, init?: ResponseInit): NextResponse;
    static redirect(url: string | URL, status?: number): NextResponse;
    static next(init?: any): NextResponse;
  }
  export class NextRequest extends Request {
    nextUrl: URL;
    cookies: any;
  }
}

declare module 'next/types.js' {
  export type ResolvingMetadata = any;
  export type ResolvingViewport = any;
}

declare module 'next/server.js' {
  export * from 'next/server';
}
