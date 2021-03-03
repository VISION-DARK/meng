const other = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *OTHER MENU* ]----- 🔰
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
┃│➸ *${prefix}premiumlist*
┃│➸ *${prefix}artinama*
┃│➸ *${prefix}artijodoh*
┃│➸ *${prefix}brainly*
┃│➸ *${prefix}wiki*
┃│➸ *${prefix}kbbi*
┃│➸ *${prefix}pinterest*
┃│➸ *${prefix}timer*
┃│➸ *${prefix}mutual*
┃│➸ *${prefix}next*
┃│➸ *${prefix}nangis*
┃│➸ *${prefix}cium*
┃│➸ *${prefix}peluk*
┃│➸ *${prefix}tomp3*
┃│➸ *${prefix}slowmo*
┃│➸ *${prefix}ngebass*
┃│➸ *${prefix}gemok*
┃│➸ *${prefix}tupai*
┃│➸ *${prefix}moddroid*
┃│➸ *${prefix}happymod*
┃│➸ *${prefix}nuliskiri*
┃│➸ *${prefix}nuliskanan*
┃│➸ *${prefix}trigered*
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
🔰 -----[ *POWERED BY ${ownerName}* ]----- 🔰`
}
exports.other = other