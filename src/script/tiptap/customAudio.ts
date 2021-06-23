import { Node } from '@tiptap/core'

export interface AudioOptions {
    HTMLAttributes: {
        [key: string]: any
    },
}

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        audio: {

            setAudio: (options: { src: string, type: string, controls: boolean }) => ReturnType,
        }
    }
}


export default Node.create({
    name: 'audio',

    group: 'block',

    atom: true,

    defaultOptions: <AudioOptions>{
        HTMLAttributes: {
            class: 'audio-wrapper',

        },
    },

    draggable: true,

    addAttributes() {
        return {
            src: {
                default: null,
            },
            type: {
                default: null
            },
            controls: {
                default: true
            }

        }
    },
    parseHTML() {
        return [{
            tag: 'audio',
        }]
    },


    renderHTML({ HTMLAttributes }) {


        return ['div', this.options.HTMLAttributes, ['audio', HTMLAttributes]]
    },

    addCommands() {
        return {
            setAudio: (options: { src: string, type: string }) => ({ tr, dispatch }) => {
                const { selection } = tr
                const node = this.type.create(options)
                if (dispatch) {
                    tr.replaceRangeWith(selection.from, selection.to, node)
                }

                return true
            },
        }
    },

})
