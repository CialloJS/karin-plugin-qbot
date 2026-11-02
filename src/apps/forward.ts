import { karin, logger } from 'node-karin'
import { readFileSync } from 'node:fs'

/** adapter-qqbot 裸请求入口（仅声明本测试用到的部分） */
interface RequestApiLike {
  post (path: string, body?: Record<string, unknown>): Promise<unknown>
}

/** Trae 长文本里抓到的真实图片数据，首行格式为 `名称: base64` */
const TEST_FILE = 'C:\\Users\\momo\\AppData\\Roaming\\Trae CN\\User\\workspaceStorage\\7ab9fcbac4838b270431eea91438fb78\\long-text\\6ad8f5fd0495805ad1a950c0\\mvie8435-hp92\\F990ACC00....txt'

/**
 * 临时测试：45625 真实图片数据 + 追加自定义内容
 *
 * 45625 字符的真实 PNG 截断能折叠成合并转发，43750 + 填充则不能。
 * 这里保持已成功的前 45625 字符，尾部再拼一段中文，验证
 * 「图片数据触发折叠后，尾部能否夹带自定义内容」。
 */
export const forwardTest = karin.command(/^#?qbot转发测试$/, async (e) => {
  const request = (e.bot as unknown as { super?: { request?: RequestApiLike } }).super?.request
  if (!request || !e.isGroup) return e.reply('仅支持 qqbot 群聊测试')

  const first = readFileSync(TEST_FILE, 'utf8').split(/\r?\n/)[0].trim()
  const raw = first.slice(first.indexOf(':') + 1).trim()
  const content = `${raw.slice(0, 45625)}\n塞入的内容：这是一段测试文本，看看能不能跟着图片一起折叠。`
  logger.debug(`[qbot转发测试] 文本长度 ${content.length}`)

  try {
    const res = await request.post(`/v2/groups/${e.contact.peer}/messages`, {
      msg_type: 0,
      content,
      msg_id: e.messageId,
      msg_seq: 18,
    })
    logger.debug(`[qbot转发测试] 成功: ${JSON.stringify(res)}`)
    return e.reply(`发送成功\n${JSON.stringify(res)}`)
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err)
    logger.debug(`[qbot转发测试] 失败: ${msg}`)
    return e.reply(`发送失败\n${msg}`)
  }
}, {
  name: 'qbot转发测试',
  permission: 'all',
})
