import { ethers } from 'ethers'

const defaults = {}

defaults.network = {}
defaults.network.connector = undefined
defaults.network.chainId = Number(process.env.REACT_APP_CHAIN_ID)

defaults.network.provider = new ethers.providers.WebSocketProvider(
	process.env.REACT_APP_WS_URL,
	defaults.network.chainId,
)

defaults.layout = {}

defaults.layout.header = {}
defaults.layout.header.width = '100%'
defaults.layout.header.padding = '1.2rem 1rem'
defaults.layout.header.minHeight = '98.4px'

defaults.layout.container = {}
defaults.layout.container.lg = {}
defaults.layout.container.lg.width = '75rem'
defaults.layout.container.lg.padding = { base: '0 1.25rem', md: '0 2.5rem' }
defaults.layout.container.sm = {}
defaults.layout.container.sm.width = '768px'

defaults.toast = {}
defaults.toast.duration = 5000
defaults.toast.closable = true
defaults.toast.position = 'top'

export default defaults