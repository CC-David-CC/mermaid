import mermaid from 'mermaid';
mermaid.initialize({startOnLoad:false,securityLevel:'strict'});
export const library=mermaid;
export function mount(){throw Error('Mermaid is a system library, not a window.');}
