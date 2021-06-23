import {

    Node,
} from '@tiptap/core'

export interface VideoOptions {
    HTMLAttributes: {
        [key: string]: any
    },
}

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        video: {
            /**
             * Add an image
             */
            setVideo: (options: { src: string, type: string, width: number, height: number, controls: boolean }) => ReturnType,
        }
    }
}


export default Node.create({
    name: 'video',

    group: 'block',

    atom: true,

    defaultOptions: <VideoOptions>{
        HTMLAttributes: {
            class: 'video-wrapper',

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
            width: {
                default: 360
            },
            height: {
                default: 240
            },
            controls: {
                default: true
            }

        }
    },
    parseHTML() {
        return [{
            tag: 'video',
        }]
    },


    renderHTML({ HTMLAttributes }) {


        return ['div', this.options.HTMLAttributes, ['video', HTMLAttributes]]
    },

    addCommands() {
        return {
            setVideo: (options: { src: string, type: string }) => ({ tr, dispatch }) => {
                const { selection } = tr
                const node = this.type.create(options)

                console.log(node)
                if (dispatch) {
                    tr.replaceRangeWith(selection.from, selection.to, node)
                }

                return true
            },
        }
    },

    // addCommands() {
    //     return {
    //         setVideo: options => ({ commands }) => {
    //             console.log(options)
    //             return commands.setContent('123')
    //         },
    //     }
    // },

    // v src: options,
    // poster: { default: null }
    // addInputRules() {
    //     return [
    //         nodeInputRule(inputRegex, this.type, match => {
    //             const [, alt, src, title] = match

    //             return { src, alt, title }
    //         }),
    //     ]
    // },
})
