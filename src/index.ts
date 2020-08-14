import { ExtensionContext } from 'vscode'
import { version } from '../package.json'
import { Log } from './utils'
import { collections } from './collections'
import { RegisterCompletion } from './completions'
import { RegisterAnnotations } from './annotation'
import { config } from './config'

export async function activate(ctx: ExtensionContext) {
  Log.info(`🈶 Activated, v${version}`)

  Log.info(`🎛 ${collections.length} icon sets loaded`)

  Log.info(JSON.stringify(config))

  RegisterCompletion(ctx)
  RegisterAnnotations(ctx)
}

export function deactivate() {
  Log.info('🈚 Deactivated')
}
