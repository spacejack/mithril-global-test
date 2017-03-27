// Global types test

const c = {
	view({attrs: {msg}}) {
		return m('div', msg)
	}
} as m.Component<{msg: string},{}>

const p = {
	view() {
		return m(c, {msg: 'Hello, world!'})
	}
}

m.mount(document.body, p)

const s: m.Stream<number> = m.stream(1)

// Note that the export below changes behaviour of this file from script to module.
// If this file has imports or exports, it will be treated as a module, and the
// additional types.d.ts file is needed to use `m` as a global.
export default p
