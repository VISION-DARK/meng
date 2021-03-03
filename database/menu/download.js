const download = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *DOWNLOAD MENU* ]----- 🔰
Hallo, ${pushname} 👋
Semoga harimu Menyenangkan User, ${sender.split("@")[0]}
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ Nama : ${pushname}
┃│➸ Level : ${getLevelingLevel(sender)}
┃│➸ User ${botName} : ${_registered.length}
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
Berikut adalah fitur yang ada pada bot ini!✨
Jika tidak paham ketik *${prefix}bingungcok*
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ *${prefix}play*
┃│➸ *${prefix}ytmp3*
┃│➸ *${prefix}ytmp4*
┃│➸ *${prefix}yutubdl*
┃│➸ *${prefix}tiktod*
┃│➸ *${prefix}igvideo*
┃│➸ *${prefix}igphoto*
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
🔰 -----[ *POWERED BY ${ownerName}* ]----- 🔰`
}
exports.download = download