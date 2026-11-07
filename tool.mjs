export const metadata = {"slug": "base64-browser", "title": "Base64 Browser", "description": "Encode and decode UTF-8 strings."};
export const fields = [{"name": "text", "label": "Text", "value": "Hello!"}];
export function compute(input){
  const bytes=new TextEncoder().encode(input.text);const binary=Array.from(bytes,b=>String.fromCharCode(b)).join('');const encoded=btoa(binary);return {encoded,roundTrip:new TextDecoder().decode(Uint8Array.from(atob(encoded),c=>c.charCodeAt(0)))}
}
