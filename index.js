/*
]=====> RAMLAN ID <=====[ ]=====> YT Ramlan ID <=====[ ]=====> 085559240360 <=====[
*/
// ANAK ANJING PASTI YANG ATAS DI UBAH
// NGOTAK KONSOL
// NUMPANG NAMA TIDAK MEMBUAT MU PRO
const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal") 
const moment = require("moment-timezone") 
const fs = require("fs") 
const crypto = require('crypto')
const base64Img = require('base64-img')
const fetch = require('node-fetch')
const { color, bgcolor } = require('./lib/color')
const { donasi } = require('./lib/donasi')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { cara } = require('./src/cara')
const { iklan1 } = require('./src/iklan')
const { exec } = require("child_process")
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const speed = require('performance-now')
const brainly = require('brainly-scraper')
const ffmpeg = require('fluent-ffmpeg')
const imgbb = require('imgbb-uploader')
const cd = 4.32e+7
const { nad } = require('./language')
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:RAMLAN ID\n' // GANTI NAMA LU
            + 'ORG:OWNER BOTZ;\n'
            + 'TEL;type=CELL;type=VOICE;waid=6285559240360:+62 855-5924-0360\n' // GANTI NOMOR LU
            + 'END:VCARD'
// UDAH SEGITU KONSOL KEBAWAH BIARIN AJA
const ngonsol = JSON.parse(fs.readFileSync('./settings/Ramlan.json'))
const {
    botName,
    ownerName,
    XteamKey,
    ownerNumber,
    botPrefix,
    GrupLimitz,
    UserLimitz,
    CeerTod
} = ngonsol
// POWERED BY RAMLAN ID
prefix = botPrefix
blocked = []   
limitawal = UserLimitz
memberlimit = GrupLimitz
cr = CeerTod

// LOAD JSON
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
const _registered = JSON.parse(fs.readFileSync('./database/user/registered.json'))
const welkom = JSON.parse(fs.readFileSync('./database/group/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/group/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./database/group/simi.json'))
const event = JSON.parse(fs.readFileSync('./database/group/event.json'))
const _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const ban = JSON.parse(fs.readFileSync('./database/user/banned.json'))
const premium = JSON.parse(fs.readFileSync('./database/user/premium.json'))
const antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
/*       
]=====> LOAD MENU <=====[
*/
const { help } = require('./lib/help')
const { simple } = require('./database/menu/simple')
const { gabut } = require('./database/menu/gabut')
const { groupm } = require('./database/menu/group')
const { download } = require('./database/menu/download')
const { dompet } = require('./database/menu/dompet')
const { random } = require('./database/menu/random')
const { other } = require('./database/menu/other')
const { owb } = require('./database/menu/owb')
const { maker } = require('./database/menu/maker')
const { sound } = require('./database/menu/sound')
/*
]=====> FUNCTION <=====[
*/
const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
        }
             
         const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/user/registered.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        
        const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
             
        
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} H ${pad(minutes)} M ${pad(seconds)} S`
}
/*
]=====> SCAN QR <=====[
*/

const baby = new WAConnection()
baby.logger.level = 'warn'
console.log(banner.string)
   baby.on('qr', qr => {
   qrcode.generate(qr, { small: true })
	console.log(color('[','white'), color('!','red'), color(']','white'), color(' SUBSCRIBE YT RAMLAN CHANNEL'))
})

	baby.on('credentials-updated', () => {
		fs.writeFileSync('./Ramlan.json', JSON.stringify(baby.base64EncodedAuthInfo(), null, '\t'))
		info('2', 'ingfokan cuyy...')
	})
	fs.existsSync('./Ramlan.json') && baby.loadAuthInfo('./Ramlan.json')
	baby.on('connecting', () => {
		start('2', 'Ramlan Connecting...')
	})
	baby.on('open', () => {
		success('2', 'Ramlan Connected')
	})
	baby.connect({timeoutMs: 30*1000})

baby.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await baby.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await baby.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `[ *WELCOME IN GC ${mdata.subject}* ] \n___________________________\n@${num.split('@')[0]} Intro/Dikick!!! \n➸ Nama : \n➸ Umur : \n➸ Askot : \n➸ Gender : \n➸ Udah Punya Doi/Blm: \n➸ Pap Muka dumlu!!! \n➸ Instagram? \n𝐒𝐚𝐯𝐞 𝐍𝐨𝐦𝐨𝐫 𝐀𝐃𝐌𝐈𝐍! \n *___________________________*\nJangan jadi kutu lomcat sayang!!`
				let buff = await getBuffer(ppimg)
				baby.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await baby.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `SELAMAT TINGGAL... @${num.split('@')[0]}👋* \n_Jasamu akan saya kubur dalam dalam_`
				let buff = await getBuffer(ppimg)
				baby.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	baby.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	baby.on('message-new', async (mek) => {
		try {
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
			const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
            body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
            var tas = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const mesejAnti = tas.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const tescuk = ["0@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const q = args.join(' ')
			const botNumber = baby.user.jid
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			pushname = baby.contacts[sender] != undefined ? baby.contacts[sender].vname || baby.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await baby.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
            const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
            
/*
]=====> RAMLAN ID <=====[
*/
            const isEventon = isGroup ? event.includes(from) : false
            const isRegistered = checkRegisteredUser(sender)
            const isBanned = ban.includes(sender)
            const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
            const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isPrem = premium.includes(sender) || isOwner
			const isImage = type === 'imageMessage'
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				baby.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				baby.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? baby.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : baby.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const sendImage = (teks) => {
		    baby.sendMessage(from, teks, image, {quoted:mek})
		    }
		    const costum = (pesan, tipe, target, target2) => {
			baby.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
		    const sendPtt = (teks) => {
		    baby.sendMessage(from, audio, mp3, {quoted:mek})
		    }
			
/*
]=====> LEVELING && ROLE <=====[
*/
			const Rank = getLevelingLevel(sender)
   	     var role = 'NEWBIE'
   	     if (Rank <= 3) {
   	         role = 'Bronze I'
   	     } else if (Rank <= 5) {
   	         role = 'Bronze II'
   	     } else if (Rank <= 7) {
   	         role = 'Bronze III'
   	     } else if (Rank <= 9) {
   	         role = 'Silver I'
   	     } else if (Rank <= 11) {
   	         role = 'Silver II'
   	     } else if (Rank <= 13) {
   	         role = 'Silver III'
   	     } else if (Rank <= 16) {
   	         role = 'Gold I'
   	     } else if (Rank <= 18) {
   	         role = 'Gold II'
   	     } else if (Rank <= 20) {
   	         role = 'Gold III'
   	     } else if (Rank <= 22) {
   	         role = 'Gold IV'
   	     } else if (Rank <= 25) {
   	         role = 'Platinum I'
   	     } else if (Rank <= 27) {
   	         role = 'Platinum II'
   	     } else if (Rank <= 29) {
   	         role = 'Platinum III'
   	     } else if (Rank <= 31) {
   	         role = 'Platinum IV'
   	     } else if (Rank <= 33) {
   	         role = 'Diamond I'
   	     } else if (Rank <= 35) {
   	         role = 'Diamomd II'
   	     } else if (Rank <= 37) {
   	         role = 'Diamond III'
   	     } else if (Rank <= 39) {
   	         role = 'Diamond IV'
   	     } else if (Rank <= 45) {
   	         role = 'Master'
   	     } else if (Rank <= 100) {
   	         role = 'Grand Master'
   	     }

            if (isGroup && isRegistered && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    bayarLimit(sender, 3)
                    await reply(nad.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel))
                }
            } catch (err) {
                console.error(err)
            }
        }
/*
]=====> CHECK LIMIT BY LANN ID <=====[
*/
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
				let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return baby.sendMessage(from,`Limit anda sudah habis\n\n_Note : limit bisa di dapatkan dengan cara ${prefix}buylimit dan naik level_`, text,{ quoted: mek})
                            baby.sendMessage(from, nad.limitcount(isPrem, limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 1 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
                        baby.sendMessage(from, nad.limitcount(isPrem, limitCounts), text, { quoted : mek})
                    }
				}
				
/*
]=====> LIMITED BY LANN ID <=====[
*/
           const isLimit = (sender) =>{ 
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    baby.sendMessage(from, nad.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit))
           return false
       }
     }

                 const limitAdd = (sender) => {
                 if (isOwner && isPrem) {return false;}
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
        
     	       if (isGroup) {
					try {
						const getmemex = groupMembers.length	
					    if (getmemex <= memberlimit) {
						reply(`maaf kak membernya sedikit, aku gak bisa disini! Minimal member : ${memberlimit}`)
						setTimeout( () => {
 	                           baby.groupLeave(from) 
 					   	}, 5000)
								setTimeout( () => {
								baby.updatePresence(from, Presence.composing)
								reply("See you kak")
							}, 4000)
								setTimeout( () => {
								baby.updatePresence(from, Presence.composing)
								reply("Oh iya, jangan lupain aku ya:(")
							}, 3000)
								setTimeout( () => {
								baby.updatePresence(from, Presence.composing)
								reply("Baru undang aku lagi:)")
							}, 2000)
								setTimeout( () => {
								baby.updatePresence(from, Presence.composing)
								reply("Membernya tambahin dulu")
							}, 1000)
								setTimeout( () => {
								baby.updatePresence(from, Presence.composing)
								reply("Aku pamit ya kak:)")
							}, 0)
					    }
		       } catch (err) { console.error(err)  }
 	       }
      
/*
]=====> ATM <=====[
*/
            if (isRegistered ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }
// ANTI LINK GRUP
                if (mesejAnti.includes("://chat.whatsapp.com/")){
		        if (!isGroup) return
		        if (!isAntiLink) return
		        if (isGroupAdmins) return reply('Atasan grup mah bebas yakan:v')
		        baby.updatePresence(from, Presence.composing)
		        if (mesejAnti.includes("#izinbos")) return reply("Iya kak jangan spam ya")
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Woyy ${sender.split("@")[0]} Gak Boleh Share Link Group😡`)
		        setTimeout( () => {
			        baby.groupRemove(from, [kic]).catch((e)=>{reply(`BOT HARUS JADI ADMIN`)})
		        }, 3000)
		        setTimeout( () => {
			        baby.updatePresence(from, Presence.composing)
			        reply("Hedsot :v")
		        }, 2000)
		        setTimeout( () => {
			        baby.updatePresence(from, Presence.composing)
			        reply("Bismillah")
		        }, 1000)
		        setTimeout( () => {
			        baby.updatePresence(from, Presence.composing)
			        reply("Ready?")
		        }, 0)
	        }               
			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m=\x1b[1;37m>', '[\x1b[1;32mBABY\x1b[1;37m]', time, color(command), 'dari', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m=\x1b[1;37m>', '[\x1b[1;31mR4M\x1b[1;37m]', time, color('Pesan'), 'dari', color(pushname), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m=\x1b[1;37m>', '[\x1b[1;32mBABY\x1b[1;37m]', time, color(command), 'dari', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m=\x1b[1;37m>', '[\x1b[1;31mR4M\x1b[1;37m]', time, color('Pesan'), 'dari', color(pushname), 'in', color(groupName), 'args :', color(args.length))
	    let authorname = baby.contacts[from] != undefined ? baby.contacts[from].vname || baby.contacts[from].notify : undefined	
	    if (authorname != undefined) { } else { authorname = groupName }				function addMetadata(packname, author) {	

				if (!packname) packname = 'BABYBOT'; if (!author) author = 'Ramlan ID';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	
					return `./src/stickers/${name}.exif`	
				})	

			}
			var prema = 'Free'
			if (isPrem) {
				prema = 'Premium'
			} 
			if (isOwner) {
				prema = 'Owner'
			}
switch(command) {
                case 'help':
				case 'menu':
				if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				    const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
				    const uangku = checkATMuser(sender)
					await costum(help(pushname, prefix, botName, ownerName, reqXp, getLevelingLevel, sender, _registered, uangku, role, prema), text, tescuk, cr)
					break
				case 'donasi':
				case 'donate':
					baby.sendMessage(from, donasi(pushname, prefix, botName, ownerName), text)
					break
				case 'iklan':
					baby.sendMessage(from, iklan1(pushname, prefix, botName, ownerName), text)
					break
				case 'bingungcok':
				if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())				
					baby.sendMessage(from, cara(pushname, prefix, botName, ownerName), text)
					break
                case 'simplemenu':
				case 'simpelmenu':
				if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())			
					await costum(simple(pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered), text, tescuk, cr)
					break
                case 'gabutmenu':
                if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())			
					await costum(gabut(pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered), text, tescuk, cr)
					break
                case 'groupmenu':
                if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (!isGroup) return reply(nad.groupo())			
					await costum(groupm(pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered), text, tescuk, cr)
					break
                case 'downloadmenu':
                if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())			
					await costum(download(pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered), text, tescuk, cr)
					break
                case 'dompetmenu':
                if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())			
					await costum(dompet(pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered), text, tescuk, cr)
					break
                case 'randommenu':
                if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())			
					await costum(random(pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered), text, tescuk, cr)
					break
                case 'makermenu':
                if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())			
					await costum(maker(pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered), text, tescuk, cr)
					break
                case 'othermenu':
                if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())					
					await costum(other(pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered), text, tescuk, cr)
					break
                case 'soundmenu':
                if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())					
					await costum(sound(pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered), text, tescuk, cr)
					break																		
                case 'ownermenu':
                if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())                				
					await costum(owb(pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered), text, tescuk, cr)
					break										
/*
]=====> SIMPLE MENU <=====[
*/
				case 'stiker':
				case 'sticker':
				case 's':
				case 'stickergif':
				case 'stikergif':
				if (isBanned) return reply(nad.baned())
				    if (!isRegistered) return reply(nad.noregis())
				    if (isLimit(sender)) return reply(nad.limitend(pusname))
                    await limitAdd(sender)				
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await baby.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(nad.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata('BABYBOT', authorname)} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(nad.stikga())
									baby.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await baby.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(nad.wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(` Gagal, pada saat mengkonversi ${tipe} ke stiker`)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata('BABYBOT', authorname)} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(nad.stikga())
									baby.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else {
						reply(`Kirim gambar/video/gif dengan caption \n${prefix}sticker (durasi sticker video 1-9 detik)`)
					}
					break
			case 'runtime':
			uptime = process.uptime()
			run = `「 *RUNTIME* 」\n${kyun(uptime)}`
			baby.sendMessage(from, run, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `𝐁𝐀𝐁𝐘 𝐁𝐎𝐓 𝐕𝐄𝐑𝐈𝐅𝐈𝐄𝐃` }}})
			break
				case 'nulis':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
				if (args.length < 1) return reply(`Teksnya mana kak? Contoh : ${prefix}nulis Ramlan baik hati`)
				nul = body.slice(7)
				reply('「❗」WAIT BRO GUE NULIS DUMLU YAKAN')
				tak = await getBuffer(`https://api.zeks.xyz/api/nulis?text=${nul}&apikey=apivinz`)
				baby.sendMessage(from, tak, image, {quoted: mek, caption: 'Lebih baik nulis sendiri ya kak :*'})
					await limitAdd(sender)				
				break					
				case 'nuliskiri':
				case 'tuliskiri':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (!isPrem) return reply(nad.premium())
				if (args.length < 1) return reply(`Teksnya mana kak? Contoh : ${prefix}nulis1 Ramlan baik hati`)
				ramlan = body.slice(11)
				reply('「❗」WAIT BRO GUE NULIS DUMLU YAKAN')
				buff = await getBuffer(`https://api.xteam.xyz/magernulis2?text=${ramlan}&APIKEY=${XteamKey}`)
				baby.sendMessage(from, buff, image, {quoted: mek, caption: 'Lebih baik nulis sendiri ya kak :*'})
				break
				case 'nuliskanan':
				case 'tuliskanan':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (!isPrem) return reply(nad.premium())
				if (args.length < 1) return reply(`Teksnya mana kak? Contoh : ${prefix}nulis2 Ramlan baik hati`)
				laysha = body.slice(12)
				reply('「❗」WAIT BRO GUE NULIS DUMLU YAKAN')
				buff = await getBuffer(`https://api.xteam.xyz/magernulis3?text=${laysha}&APIKEY=${XteamKey}`)
				baby.sendMessage(from, buff, image, {quoted: mek, caption: 'Lebih baik nulis sendiri ya kak :*'})
				break					
				case 'quotes':
				baby.updatePresence(from, Presence.composing) 
                if (isBanned) return reply(nad.baned())
                if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
				 data = fs.readFileSync('./src/quote.json');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 randQuote =''+randKey.quote+ '\n\n_By: '+randKey.by+'_'
                 baby.sendMessage(from, randQuote, text, {quoted: mek})
				 await limitAdd(sender)
				 break				
				case 'ninjalogo':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (!isPrem) return reply(nad.premium())
				var gh = body.slice(11)
				var nin = gh.split("&")[0];
				var ja = gh.split("&")[1];
				if (args.length < 1) return reply(`「❗」Contoh : ${prefix}ninjalogo Ramlan & Gans`)
				reply(nad.wait())
				buffer = await getBuffer(`https://api.xteam.xyz/textpro/ninjalogo?text=${nin}&text2=${ja}&APIKEY=${XteamKey}`)
				baby.sendMessage(from, buffer, image, {quoted: mek})
				break				
		case 'halloweentext':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (!isPrem) return reply(nad.premium())				
				if (args.length < 1) return reply(nad.wrongf())
				ween = body.slice(15)
				if (ween.length > 10) return reply('Teksnya kepanjangan, maksimal 9 karakter')
				reply(nad.wait())
				buffer = await getBuffer(`https://api.xteam.xyz/textpro/helloweenfire?text=${ween}&APIKEY=${XteamKey}`)
		    baby.sendMessage(from, buffer, image, {quoted: mek})
		    break
				case 'pornhub':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
				var gh = body.slice(9)
				var porn = gh.split("&")[0];
				var hub = gh.split("&")[1];
				if (args.length < 1) return reply(`「❗」Contoh : ${prefix}pornhub Ramlan & Hub`)
				reply(nad.wait())
				alan = await getBuffer(`https://api.zeks.xyz/api/phlogo?text1=${porn}&text2=${hub}&apikey=apivinz`)
				baby.sendMessage(from, alan, image, {quoted: mek})
				await limitAdd(sender)
				break
		case 'textlight':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))				
				if (args.length < 1) return reply(nad.wrongf())
				ligh = body.slice(11)
				if (ligh.length > 10) return reply('Teksnya kepanjangan, maksimal 9 karakter')
				reply(nad.wait())
				lawak = await getBuffer(`https://api.zeks.xyz/api/tlight?text=${ligh}&apikey=apivinz`)
		    baby.sendMessage(from, lawak, image, {quoted: mek})
		    await limitAdd(sender)
		    break
                case 'glitchtext':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
					var gh = body.slice(12)
					var gli = gh.split("&")[0];
					var tch = gh.split("&")[1];
					if (args.length < 1) return reply(`「❗」Contoh : ${prefix}glitchtext Ramlan & Gans`)
					reply(nad.wait())
					buffer = await getBuffer(`https://api.zeks.xyz/api/gtext?text1=${gli}&text2=${tch}&apikey=apivinz`)
					baby.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					break
				case 'simi':
				if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
					if (args.length < 1) return reply(`Mau nanya apa? Contoh : ${prefix}simi halo`)
					tefs = body.slice(5)
					anu = await fetchJson(`https://api.xteam.xyz/simsimi?kata=${tefs}&APIKEY=${XteamKey}`)
					reply(anu.jawaban)
					await limitAdd(sender)
					break
				case 'tts':
				if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
				if (args.length < 1) return baby.sendMessage(from, `Kode bahasanya mana kak? contoh : ${prefix}tts id Halo Ramlan`, text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return baby.sendMessage(from, `Teksnya mana kak | contoh : ${prefix}tts id ah yamate kudasai`, text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 300
					? reply('Teks nya terlalu panjang kak')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buff = fs.readFileSync(rano)
							if (err) return reply(nad.stikga())
							baby.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					await limitAdd(sender)
					break
							case 'ttp': //By NOIR X RAMLAN ID
							pngttp = './temp/ttp.png'
							webpng = './temp/ttp.webp'
							const ttptext = body.slice(5)
							fetch(`https://api.areltiyan.site/sticker_maker?text=${ttptext}`, { method: 'GET'})
							.then(async res => {
							const ttptxt = await res.json()
							console.log("SUKSES")
							base64Img.img(ttptxt.base64, 'temp', 'ttp', function(err, filepath) {
							if (err) return console.log(err);
							exec(`ffmpeg -i ${pngttp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${webpng}`, (err) => {
							buffer = fs.readFileSync(webpng)
							baby.sendMessage(from, buffer, sticker)
							fs.unlinkSync(webpng)
							fs.unlinkSync(pngttp)
							})
							})
							});
							break
				case 'toimg':
				if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
				if (!isQuotedSticker) return reply('Reply atau Tag sticker yang mau dijadiin gambar kak >_<')
					reply(nad.wait())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await baby.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(nad.stikga())
						buffer = fs.readFileSync(ran)
						baby.sendMessage(from, buffer, image, {quoted: mek, caption: 'nih kak [(^.^)]'})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender)
					break
                case 'speed':
                case 'ping':
                const timestamp = speed();
                const latensi = speed() - timestamp 
                baby.sendMessage(from, `Speed: ${latensi.toFixed(4)} _ms_`, text, { quoted: mek})
                    break					
                case 'bikinquote':
                if (isBanned) return reply(nad.baned())
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                var gh = body.slice(12)
					var quote = gh.split("&")[0];
					var wm = gh.split("&")[1];
					const pref = `yang mau dijadiin quote apaan, titit?\n\ncontoh : ${prefix}bikinquote aku bukan boneka & Kata Ramlan`
					if (args.length < 1) return reply(pref)
					reply(nad.wait())
					anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=random`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					baby.sendMessage(from, buffer, image, {caption: 'Nih kak >_<', quoted: mek})
					await limitAdd(sender)
					break
                case 'meme':
                if (isBanned) return reply(nad.baned())
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
					nganu = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=apivinz`)
					buper = await getBuffer(nganu.result)
					baby.sendMessage(from, buper, image, {quoted: mek})
					await limitAdd(sender)
					break					
                   case 'stalkig':
                   if (isBanned) return reply(nad.baned())
                   if (!isRegistered) return reply(nad.noregis())
                   if (isLimit(sender)) return reply(nad.limitend(pusname))
                     tess = body.slice(9)
                     anu = await fetchJson(`https://api.shizukaa.xyz/api/igstalk?apikey=itsmeiky633&u=${tess}`, {method: 'get'})
                     reply('「❗」Sabar Lagi Stalking IG nya kak')
                     buffer = await getBuffer(anu.data.profilehd)
                     hasil = `YAHAHA TELAH DI STALK BOS KU UNTUK USERNAME ${tess}
*◯ Nama* : _${anu.data.fullname}_
*◯ Jumlah Follower* : _${anu.data.follower}_
*◯ Jumlah Following* : _${anu.data.following}_
*◯ Biografi* : _${anu.data.bio}_`
                    baby.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
                    await limitAdd(sender)
			       break
				case 'daftar':
				if (isBanned) return reply(nad.baned())
                if (isRegistered) return  reply(nad.rediregis())
                if (!q.includes('|')) return  reply(nad.wrongf())
                const namaUser = q.substring(0, q.indexOf('|') - 0)
                const umurUser = q.substring(q.lastIndexOf('|') + 1)
                const serialUser = createSerial(20)
                if (namaUser.length >= 30) return reply(`Namanya kepanjangan kak :)`)
                if (umurUser.length >= 3, umurUser.length <= 1) return reply(`Umur min 10 tahun max 40 tahun`)
                veri = sender
                if (isGroup) {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await reply(nad.registered(namaUser, umurUser, serialUser, time, sender))
                    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                } else {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await reply(nad.registered(namaUser, umurUser, serialUser, time, sender))
                    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                }
					break
// PREMIUM
				case 'premiumlist':
					baby.updatePresence(from, Presence.composing) 
                    if (!isRegistered) return reply(nad.noregis())
					iyaa = `╭─「 *JUMLAH USER PREMIUM* 」\n`
					no = 0
					for (let prem of premium) {
						no += 1
						iyaa += `│「${no.toString()}」 @${prem.split('@')[0]}\n`
					}
					iyaa += `│ Jumlah User Premium : ${premium.length}\n╰──────「 *${botName}* 」`
					baby.sendMessage(from, iyaa.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": premium}})
					break
				case 'bokep':
				baby.updatePresence(from, Presence.composing) 
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (!isPrem) return reply(nad.premium())
				 data = fs.readFileSync('./src/18.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 randBokep = await getBuffer(randKey.image)
                 reply('JANGAN COMLY MULU BRO')
                 randTeks = randKey.teks
                 baby.sendMessage(from, randBokep, image, {quoted: mek, caption: randTeks})
				break
				case 'mutual':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (!isPrem) return reply(nad.premium())
                if (isGroup) return  reply( 'TIDAK BISA DI GRUP KAK')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Mencari Pasangan >_<')
                await reply(`wa.me/${anug}`)
                await reply( `Pasangan Ditemukan: 🐊\n*${prefix}next* — Temukan Pasangan Baru`)
            break
            case 'next':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (!isPrem) return reply(nad.premium())
                if (isGroup) return  reply( 'TIDAK BISA DI GRUP KAK')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Mencari Pasangan >_<')
                await reply(`wa.me/${anug}`)
                await reply( `Pasangan Ditemukan: 🐊\n*${prefix}next* — Temukan Pasangan Baru`)
                break
                case 'blowjob':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (!isPrem) return reply(nad.premium())
				                   if (!isGroup) return reply(nad.groupo())
                   if (!isNsfw) return reply(nad.nsfwoff())
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=BotWeA`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(nad.stikga())
						buffer = fs.readFileSync(rano)
						baby.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
                case 'nangis':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (!isPrem) return reply(nad.premium())
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/cry?apikey=BotWeA`, {method: 'get'})
					reply('「❗」KASIH JEDA 1 MENIT HABIS INI YA KAK')
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(nad.stikga())
						buffer = fs.readFileSync(rano)
						baby.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
                case 'pussy':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (!isPrem) return reply(nad.premium())
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://api.shizukaa.xyz/api/pussy?apikey=itsmeiky633`, {method: 'get'})
					reply('「❗」KASIH JEDA 1 MENIT HABIS INI YA KAK')
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(nad.stikga())
						buffer = fs.readFileSync(rano)
						baby.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
		 case 'tomp3':
                if (isBanned) return reply(nad.baned())
                if (!isRegistered) return reply(nad.noregis())
				if (!isPrem) return reply(nad.premium())
                	baby.updatePresence(from, Presence.composing) 
					if (!isQuotedVideo) return reply('*Reply video nya lah-_-*')
					reply(nad.wait())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await baby.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Yahh gagall um:(')
						rmln = fs.readFileSync(ran)
						baby.sendMessage(from, rmln, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
					}) 
					break
				case 'slowmo':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (!isPrem) return reply(nad.premium())
				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				media = await baby.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
				fs.unlinkSync(media)
				if (err) return reply('Error!')
				uhh = fs.readFileSync(ran)
				baby.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
				fs.unlinkSync(ran)
				})
				break

				case 'tupai':
				                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (!isPrem) return reply(nad.premium())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await baby.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						baby.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'gemok':
				                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (!isPrem) return reply(nad.premium())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await baby.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						baby.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'ngebass':                 
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (!isPrem) return reply(nad.premium())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					media = await baby.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						baby.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
					break
					case 'cium':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (!isPrem) return reply(nad.premium())
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/kiss?apikey=BotWeA`, {method: 'get'})
					reply('「❗」KASIH JEDA 1 MENIT HABIS INI YA KAK')
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(nad.stikga())
						buffer = fs.readFileSync(rano)
						baby.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
				case 'wiki':
					if (args.length < 1) return reply(`masukan kata kunci\ncontoh : ${prefix}wiki hacker`)
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
				    if (isLimit(sender)) return reply(nad.limitend(pusname))
					anu = await fetchJson(`https://api.shizukaa.xyz/api/wiki?apikey=itsmeiky633&q=${body.slice(6)}`)
					reply(anu.result)
                    await limitAdd(sender)
					break
					case 'kbbi':
					if (args.length < 1) return reply(`masukan kata kunci\ncontoh : ${prefix}kbbi semangka`)
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
				    if (isLimit(sender)) return reply(nad.limitend(pusname))
					abu = await fetchJson(`https://api.zeks.xyz/api/kbbi?q=${body.slice(6)}&apikey=apivinz`)
					reply(abu.result)
                    await limitAdd(sender)
					break					
					case 'peluk':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (!isPrem) return reply(nad.premium())
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/hug?apikey=BotWeA`, {method: 'get'})
					reply('「❗」KASIH JEDA 1 MENIT HABIS INI YA KAK')
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(nad.stikga())
						buffer = fs.readFileSync(rano)
						baby.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
// YTMP4
				case 'yutubdl':
					if (args.length < 1) return reply('Linknya mana um?')
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
				    if (!isPrem) return reply(nad.premium())
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('URL NYA TIDAK VALID KAK')
					lah = await fetchJson(`https://api.xteam.xyz/dl/ytmp4?url=${body.slice(9)}&APIKEY=${XteamKey}`)
					if (lah.error) return reply(lah.error)
					tens = `*➸ Judul* : ${lah.judul}\n*➸ Size* : ${lah.size}\n\n*[WAIT] Proses Dumlu Yakan*`
					mengasu = await getBuffer(lah.thumbnail)
					baby.sendMessage(from, mengasu, image, {quoted: mek, caption: tens})
					mengery = await getBuffer(lah.url)
					baby.sendMessage(from, mengery, video, {mimetype: 'video/mp4', quoted: mek})
					break
// YTMP4
				case 'ytmp4':
					if (args.length < 1) return reply('Linknya mana um?')
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (!isPrem) return reply(nad.premium())
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('URL NYA TIDAK VALID KAK')
					cie = await fetchJson(`https://api.zeks.xyz/api/ytmp4/2?url=${body.slice(7)}&apikey=apivinz`)
					if (cie.error) return reply(cie.error)
					tels = `*➸ Judul* : ${cie.result.title}\n*➸ Size* : ${cie.result.size}\n\n*[WAIT] Proses Dumlu Yakan*`
					bufper = await getBuffer(cie.result.thumb)
					baby.sendMessage(from, bufper, image, {quoted: mek, caption: tels})
					bufp = await getBuffer(cie.result.link)
					baby.sendMessage(from, bufp, video, {mimetype: 'video/mp4', quoted: mek})
					break
				case 'tiktod':
					if (args.length < 1) return reply('Linknya mana um?')
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
					anu = await fetchJson(`https://api.xteam.xyz/dl/tiktok?url=${body.slice(8)}&APIKEY=${XteamKey}`)
					reply('[WAIT] Proses Dumlu Yakan')
					neteh = await getBuffer(anu.result.url)
					baby.sendMessage(from, neteh, video, {mimetype: 'video/mp4', quoted: mek})
					await limitAdd(sender)
					break
					case 'hidetag5':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (!isPrem) return reply(nad.premium())
					if (!isGroup) return reply(nad.groupo())
					var value = body.slice(10)
					var group = await baby.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					baby.sendMessage(from, options, text)
	                .then(() => {baby.sendMessage(from, options, text)})
	                .then(() => {baby.sendMessage(from, options, text)})
	                .then(() => {baby.sendMessage(from, options, text)})
	                .then(() => {baby.sendMessage(from, options, text)})
					break
					case 'hidetag10':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (!isPrem) return reply(nad.premium())
					if (!isGroup) return reply(nad.groupo())
					var value = body.slice(11)
					var group = await baby.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					baby.sendMessage(from, options, text)
	                .then(() => {baby.sendMessage(from, options, text)})
	                .then(() => {baby.sendMessage(from, options, text)})
	                .then(() => {baby.sendMessage(from, options, text)})
	                .then(() => {baby.sendMessage(from, options, text)})
	                .then(() => {baby.sendMessage(from, options, text)})
	                .then(() => {baby.sendMessage(from, options, text)})
	                .then(() => {baby.sendMessage(from, options, text)})
	                .then(() => {baby.sendMessage(from, options, text)})
	                .then(() => {baby.sendMessage(from, options, text)})	                	                
					break
                case 'randomhentong':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (!isPrem) return reply(nad.premium())
					gatauda = body.slice(15)
					reply(nad.wait())
					buffer = await getBuffer(`https://api.xteam.xyz/randomimage/hentai?APIKEY=${XteamKey}`)
					baby.sendMessage(from, buffer, image, {quoted: mek})
					break	    								
/*
]=====> GABUTZ MENU <=====[
*/
				case 'tebakin':
				if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
					anu = await fetchJson(`https://api.zeks.xyz/api/tebakgambar?apikey=apivinz`, {method: 'get'})
					ngebuff = await getBuffer(anu.result.soal)
					tebak = `➸ Jawaban : *${anu.result.jawaban}*`
					setTimeout( () => {
					baby.sendMessage(from, tebak, text, {quoted: mek})
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					baby.sendMessage(from, '_10 Detik lagi..._', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					baby.sendMessage(from, '_20 Detik lagi..._', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					baby.sendMessage(from, '_30 Detik lagi..._', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					baby.sendMessage(from, ngebuff, image, { caption: '_Tebak bro!!! gak bisa jawab donasi ya:v_', quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break
				case 'bisakah':
				if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
					bisakah = body.slice(1)
					const bisa =['Tentu Saja Bisa! Kamu Adalah Orang Paling Homky','Gak Bisa Ajg Aowkwowk','Hmm Gua Gak Tau Yaa, tanya ama bapakau','Ulangi Tod Gua Ga Paham']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					baby.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
					await limitAdd(sender)
					break
				case 'kapankah':
				if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					baby.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					await limitAdd(sender)
					break
           case 'apakah':
           if (isBanned) return reply(nad.baned())
           if (!isRegistered) return reply(nad.noregis())
           if (isLimit(sender)) return reply(nad.limitend(pusname))
					apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Ulangi bro gak paham']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					baby.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
					await limitAdd(sender)
					break
				case 'rate':
				if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
					rate = body.slice(1)
					const ra =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const te = ra[Math.floor(Math.random() * ra.length)]
					baby.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
           case 'hobby':
           if (isBanned) return reply(nad.baned())
           if (!isRegistered) return reply(nad.noregis())
           if (isLimit(sender)) return reply(nad.limitend(pusname))
					hobby = body.slice(1)
					const hob =['Desah Di Game','Ngocokin Doi','Stalking sosmed nya mantan','Kau kan gak punya hobby awokawok','Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					baby.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })
					await limitAdd(sender)
					break
case 'neontext':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (!isPrem) return reply(nad.premium())
					if (args.length < 1) return reply(`「❗」Contoh : ${prefix}neontext Ramlan`)
					naon = body.slice(10)
					reply('「❗」WAIT GANS')
					alu = await getBuffer(`https://api.xteam.xyz/textpro/neon?text=${naon}&APIKEY=${XteamKey}`)
					baby.sendMessage(from, alu, image, {quoted: mek})
					break
                case 'truth':
                if (isBanned) return reply(nad.baned())
                if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
					const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					baby.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
					await limitAdd(sender)
					break
                case 'dare':
                if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))                
					const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot 🤥 setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					baby.sendMessage(from, tod, image, { quoted: mek, caption: '*Dare*\n\n'+ der })
					await limitAdd(sender)
					break
                case 'cekbapak': // By Ramlan ID
                if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
				const bapak =['Wah Mantap Lu Masih Punya Bapack\nPasti Bapack Nya Kuli :v\nAwowkwokwwok\n#CandabOs','Aowkwwo Disini Ada Yteam :v\nLu Yteam Bro? Awowkwowk\nSabar Bro Ga Punya Bapack\n#Camda','Bjir Bapack Mu Ternyata Sudah Cemrai\nSedih Bro Gua Liatnya\nTapi Nih Tapi :v\nTetep Ae Lu Yteam Aowkwowkw Ngakak :v','Jangan #cekbapak Mulu Broo :v\nKasian Yang Yteam\nNtar Tersinggung Kan\nYahahaha Hayyuk By : Ramlan ID']
					const cek = bapak[Math.floor(Math.random() * bapak.length)]
					baby.sendMessage(from, cek, text, { quoted: mek})
					await limitAdd(sender)
					break
                  case 'timer':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))                  
				if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"0000"
				} else if (args[1]=="jam") {var timer = args[0]+"00000"
				} else {return reply("*pilih:*\ndetik\nmenit\njam")}
				setTimeout( () => {
				reply("Bangun Woyy Habis Waktu :v")
				}, timer)
				break						   
/*
]=====> MENU GRUP <=====[
*/		 
				case 'welcome':
                  if (isBanned) return reply(nad.baned())				
					if (!isGroup) return reply(nad.groupo())
					if (!isGroupAdmins) return reply(nad.admin())
					if (args.length < 1) return reply('Ekhemm >_<')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('*FITUR WELCOME SUDAH AKTIF KAK*')
						welkom.push(from)
						fs.writeFileSync('./database/group/welkom.json', JSON.stringify(welkom))
						reply('*「 SUKSES 」MENGAKTIFKAN FITUR WELCOME DI GROUP*')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/group/welkom.json', JSON.stringify(welkom))
						reply('*「 SUKSES 」MEMATIKAN FITUR WELCOME DI GROUP*')
					} else {
						reply(nad.satukos())
					}
					break
					case 'blackpink':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname))
					if (args.length < 1) return reply(`「❗」Contoh : ${prefix}blackpink Ramlan`)
					pink = body.slice(11)
					reply('「❗」Hah Blekping :v')
					lol = await getBuffer(`https://api.zeks.xyz/api/logobp?text=${pink}&apikey=apivinz`)
					baby.sendMessage(from, lol, image, {quoted: mek})
					await limitAdd(sender)
					break
					case 'coffetext':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname))
					if (args.length < 1) return reply(`「❗」Contoh : ${prefix}blackpink Ramlan`)
					coff = body.slice(11)
					mhe = await fetchJson(`https://api.shizukaa.xyz/api/coffie?apikey=itsmeiky633&text=${coff}`)
					reply(nad.wait())
					atu = await getBuffer(mhe.result.url)
					baby.sendMessage(from, atu, image, {quoted: mek})
					await limitAdd(sender)
					break			
                 case 'event':
                  if (isBanned) return reply(nad.baned())                 
					if (!isGroup) return reply(nad.groupo())
					if (!isOwner) return reply(nad.ownerb())
					if (args.length < 1) return reply('Ekhemm >_<')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*FITUR EVENT SUDAH AKTIF BOS*')
						event.push(from)
						fs.writeFileSync('./database/group/event.json', JSON.stringify(event))
						reply('*「 SUKSES 」MENGAKTIFKAN EVENT DI GROUP*')
					} else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./database/group/event.json', JSON.stringify(event))
						reply('*「 SUKSES 」MEMATIKAN EVENT DI GROUP*')
					} else {
						reply(nad.satukos())
					}
					break
                case 'leveling':
                if (!isGroup) return reply(nad.groupo())
                if (!isGroupAdmins) return reply(nad.admin())
                if (args.length < 1) return reply('Ekhemm >_<')
                if (args[0] === '1') {
                    if (isLevelingOn) return reply('*fitur level sudah aktif sebelum nya*')
                    _leveling.push(from)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(nad.lvlon())
                } else if (args[0] === '0') {
                    _leveling.splice(from, 1)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(nad.lvloff())
                } else {
                    reply(nad.satukos())
                }
					break
				case 'simih':
                  if (isBanned) return reply(nad.baned())				
					if (!isGroup) return reply(nad.groupo())
					if (!isGroupAdmins) return reply(nad.admin())
					if (args.length < 1) return reply('Ekhemm >_<')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('*SUDAH AKTIF*')
						samih.push(from)
						fs.writeFileSync('./database/group/simi.json', JSON.stringify(samih))
						reply('*「 SUKSES 」MENGAKTIFKAN FITUR SIMI DI GROUP*')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./database/group/simi.json', JSON.stringify(samih))
						reply('*「 SUKSES 」MEMATIKAN FITUR SIMI DI GROUP*')
					} else {
						reply(nad.satukos())
					}
					break
				case 'nsfw':
                  if (isBanned) return reply(nad.baned())				
					if (!isGroup) return reply(nad.groupo())
					if (!isGroupAdmins) return reply(nad.admin())
					if (args.length < 1) return reply('Ekhem >_<')
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply(' *sudah aktif*  !!')
						nsfw.push(from)
						fs.writeFileSync('./database/group/nsfw.json', JSON.stringify(nsfw))
						reply('*「 SUKSES 」MENGAKTIFKAN FITUR NSFW DI GROUP*')
					} else if (Number(args[0]) === 0) {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/group/nsfw.json', JSON.stringify(nsfw))
						reply('*「 SUKSES 」MEMATIKAN FITUR NSWF DI GROUP*')
					} else {
						reply(nad.satukos())
					}
					break
                                case 'antilinkgrup':
                  if (isBanned) return reply(nad.baned())				
					if (!isGroup) return reply(nad.groupo())
					if (!isGroupAdmins) return reply(nad.admin())
					if (!isBotGroupAdmins) return reply(nad.badmin())					
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('EMANG MATI?')
						antilink.push(from)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply('「 SUKSES 」MENGAKTIFKAN ANTI LINK DI GROUP')
						baby.sendMessage(from,`ALLERT!!! Jika bukan admin jangan kirim link grup`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiLink) return reply('EMANG AKTIF?')
						var ini = anti.botLangsexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply('「 SUKSES 」MEMATIKAN ANTI LINK DI GROUP')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break					
					
				case 'admin':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))			
					if (!isGroup) return reply(nad.groupo())
					teus = `*DAFTAR ATASAN GROUP* _${groupMetadata.subject}_\n*TOTAL* : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teus += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teus, groupAdmins, true)
					await limitAdd(sender)
					break
					case 'grup':
					case 'group':
                  if (isBanned) return reply(nad.baned())					
					if (!isGroup) return reply(nad.groupo())
					if (!isGroupAdmins) return reply(nad.admin())
					if (!isBotGroupAdmins) return reply(nad.badmin())
					if (args[0] === 'buka') {
					    reply(`*BERHASIL MEMBUKA GROUP*`)
						baby.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						reply(`*BERHASIL MENUTUP GROUP*`)
						baby.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break
				case 'add':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())	
					if (!isGroup) return reply(nad.groupo())
					if (!isGroupAdmins) return reply(nad.admin())
					if (!isBotGroupAdmins) return reply(nad.badmin())
					if (args.length < 1) return reply('Yang mau di add siapa?')
					if (args[0].startsWith('08')) return reply('Gunakan kode bahasa kak')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						baby.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Anjim yang mau di add di private, dahlah :)')
					}
					break
			     	case 'kick':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())	     	
					if (!isGroup) return reply(nad.groupo())
					if (!isGroupAdmins) return reply(nad.admin())
					if (!isBotGroupAdmins) return reply(nad.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 ??𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teys = ''
						for (let _ of mentioned) {
							teys += `Bismillah atas izin admin grup kamu akan saya tendang 🏃 :\n`
							teys += `@_.split('@')[0]`
						}
						mentions(teys, mentioned, true)
						baby.groupRemove(from, mentioned)
					} else {
						mentions(`Bismillah atas izin admin grup kamu akan saya tendang @${mentioned[0].split('@')[0]} 🏃`, mentioned, true)
						baby.groupRemove(from, mentioned)
					}
					break
                case 'hidetag':
                  if (isBanned) return reply(nad.baned())                
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
					if (!isGroup) return reply(nad.groupo())
					if (!isGroupAdmins) return reply(nad.admin())
					var value = body.slice(9)
					var group = await baby.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					baby.sendMessage(from, options, text)
					await limitAdd(sender)
					break					
                case 'level':
                  if (isBanned) return reply(nad.baned())                
                if (!isRegistered) return reply(nad.noregis())
                if (!isLevelingOn) return reply(nad.lvlnoon())
                if (!isGroup) return reply(nad.groupo())
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(nad.lvlnul())
                const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
                resul = `┏━━━━━━♡ *LEVEL* ♡━━━━━━━┓\n┃╭───────────────────\n┃│➸ NAMA : ${pushname}\n┃│➸ NOMOR : wa.me/${sender.split("@")[0]}\n┃│➸ XP : ${userXp}/${requiredXp}\n┃│➸ LEVEL : ${userLevel}\n┃╰───────────────────\n┗━━━━━━━━━━━━━━━━━━━━┛`
               baby.sendMessage(from, resul, text, { quoted: mek})
                .catch(async (err) => {
                        console.error(err)
                        await reply(`Error!\n${err}`)
                    })
					break
                 case 'linkgrup':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))                
				    if (!isGroup) return reply(nad.groupo())
				    if (isLimit(sender)) return reply(nad.limitend(pusname))
				    if (!isBotGroupAdmins) return reply(nad.badmin())
				    linkgc = await baby.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    baby.sendMessage(from, yeh, text, {quoted: mek})
			        await limitAdd(sender)
					break
				case 'tagall':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))		
					if (!isGroup) return reply(nad.groupo())
					if (!isGroupAdmins) return reply(nad.admin())
					members_id = []
					tets = (args.length > 1) ? body.slice(8).trim() : ''
					for (let mem of groupMembers) {
					tets += '\n\n'
						tets += `➸ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(tets, members_id, true)
					await limitAdd(sender)
					break
				case 'tagall':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					members_id = []
					ters = (args.length > 1) ? body.slice(8).trim() : ''
					ters += '\n\n'
					for (let mem of groupMembers) {
						ters += `➸ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(ters, members_id, true)
					break
           case 'setname':
                if (!isRegistered) return reply(nad.noregis())           
                if (!isGroup) return reply(nad.groupo())
			    if (!isGroupAdmins) return reply(nad.admin())
				if (!isBotGroupAdmins) return reply(nad.badmin())
                baby.groupUpdateSubject(from, `${body.slice(9)}`)
                baby.sendMessage(from, '「 SUKSES 」Mengubah Nama Grup', text, {quoted: mek})
					break
                case 'setdesc':
                if (!isRegistered) return reply(nad.noregis())                
                if (!isGroup) return reply(nad.groupo())
			    if (!isGroupAdmins) return reply(nad.admin())
				if (!isBotGroupAdmins) return reply(nad.badmin())
                baby.groupUpdateDescription(from, `${body.slice(9)}`)
                baby.sendMessage(from, '*「 SUKSES 」Mengubah Desk Grup', text, {quoted: mek})
					break
           case 'demote':
                if (!isRegistered) return reply(nad.noregis())           
					if (!isGroup) return reply(nad.groupo())
					if (!isGroupAdmins) return reply(nad.admin())
					if (!isBotGroupAdmins) return reply(nad.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						tews = ''
						for (let _ of mentioned) {
							tews += `*jabatan kamu di copot*🏃 :\n`
							tews += `@_.split('@')[0]`
						}
						mentions(tews, mentioned, true)
						baby.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`Yahh @${mentioned[0].split('@')[0]} Jabatan kamu sebagai leluhur di grup telah di copot🏃`, mentioned, true)
						baby.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'promote':
                if (!isRegistered) return reply(nad.noregis())				
					if (!isGroup) return reply(nad.groupo())
					if (!isGroupAdmins) return reply(nad.admin())
					if (!isBotGroupAdmins) return reply(nad.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 ??𝗮??𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						tems = ''
						for (let _ of mentioned) {
							tems += `Yeee🥳 Kamu naik jabatan >_< :\n`
							tems += `@_.split('@')[0]`
						}
						mentions(tems, mentioned, true)
						baby.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`Selamat🥳 @${mentioned[0].split('@')[0]} *anda naik menjadi admin group* >_<`, mentioned, true)
						baby.groupMakeAdmin(from, mentioned)
					}
					break
				case 'hedsot':
                if (!isRegistered) return reply(nad.noregis())				
					if (!isGroup) return reply(nad.groupo())
					if (!isGroupAdmins) return reply(nad.admin())
					if (!isBotGroupAdmins) return reply(nad.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						tecs = 'Bismillah Hedsot >_< :\n'
						for (let _ of mentioned) {
							tecs += `@${_.split('@')[0]}\n`
						}
						mentions(tecs, mentioned, true)
						baby.groupRemove(from, mentioned)
						mentions(tecs, mentioned, true)
						baby.groupAdd(from, [num])
					} else {
						mentions(`Berhasil Meng hedsot pala nya  : @${mentioned[0].split('@')[0]}`, mentioned, true)
						baby.groupRemove(from, mentioned)
						}
					break
                 case 'fitnah':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))				
					if (!isGroup) return reply(nad.groupo())                 
				if (args.length < 1) return reply(`Gini kak : ${prefix}fitnah [@tag&pesan&balasanbot]\n\nContoh : ${prefix}fitnah @tagmember&hai&hai juga`)
				var gh = body.slice(8)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					var replace = gh.split("&")[0];
					var target = gh.split("&")[1];
					var bot = gh.split("&")[2];
					baby.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
					await limitAdd(sender)
					break
                      case 'leave':
                      if (isBanned) return reply(nad.baned())      
                      if (!isRegistered) return reply(nad.noregis())           
                      if (!isGroup) return reply(nad.groupo())
                      if (!isGroupAdmins) return reply(nad.admin())
                      setTimeout( () => {
                      baby.groupLeave (from) 
                      }, 2000)
                      setTimeout( () => {
                      baby.updatePresence(from, Presence.composing) 
                      if (!isRegistered) return reply(nad.noregis())
                      if (isBanned) return reply(nad.baned())   
                      baby.sendMessage(from, 'Aku pamit kak:)', text)
                      }, 0)
                      break																									
/*
]=====> DOWNLOAD MENU <=====[
*/
case 'play':
     if (isBanned) return reply(nad.baned())
	 if (!isRegistered) return reply(nad.noregis())
if (!isPrem) return reply(nad.premium())
     reply(nad.wait())
     anu = await fetchJson(`https://api.xteam.xyz/dl/play?lagu=${body.slice(6)}&APIKEY=${XteamKey}`)
     if (anu.error) return reply(anu.error)
     infomp3 = `*「❗」Lagu Ditemukan「❗」*\n➸ Judul : ${anu.judul}\n➸ Size : ${anu.size}\n\n*[WAIT] Proses Dumlu Yakan*`
     bumfer = await getBuffer(anu.thumbnail)
     lamgu = await getBuffer(anu.url)
     baby.sendMessage(from, bumfer, image, {quoted: mek, caption: infomp3})
     baby.sendMessage(from, lamgu, audio, {mimetype: 'audio/mp4', quoted: mek})
break
case 'ytmp3':
     if (isBanned) return reply(nad.baned())
	 if (!isRegistered) return reply(nad.noregis())
	 if (isLimit(sender)) return reply(nad.limitend(pusname)) 
     reply(nad.wait())
     anu = await fetchJson(`https://api.zeks.xyz/api/ytmp3/2?url=${body.slice(7)}&apikey=apivinz`)
     if (anu.error) return reply(anu.error)
     ingfomp3 = `*「❗」Lagu Ditemukan「❗」*\n➸ Judul : ${anu.result.title}\n➸ Size : ${anu.result.size}\n\n*[WAIT] Proses Dumlu Yakan*`
     buffer = await getBuffer(anu.result.thumb)
     lagu = await getBuffer(anu.result.link)
     baby.sendMessage(from, buffer, image, {quoted: mek, caption: ingfomp3})
     baby.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', quoted: mek})
     await limitAdd(sender)
break
case 'igvideo':
     if (isBanned) return reply(nad.baned())
	 if (!isRegistered) return reply(nad.noregis())
	 if (isLimit(sender)) return reply(nad.limitend(pusname)) 
     reply(nad.wait())
     anu = await fetchJson(`https://api.zeks.xyz/api/ig?url=${body.slice(9)}&apikey=apivinz`)
     if (anu.error) return reply(anu.error)
     igv = await getBuffer(anu.result[0].url)
     baby.sendMessage(from, igv, video, {mimetype: 'video/mp4', quoted: mek})
     await limitAdd(sender)
break
case 'igphoto':
     if (isBanned) return reply(nad.baned())
	 if (!isRegistered) return reply(nad.noregis())
	 if (isLimit(sender)) return reply(nad.limitend(pusname)) 
     reply(nad.wait())
     asu = await fetchJson(`https://api.zeks.xyz/api/ig?url=${body.slice(9)}&apikey=apivinz`)
     if (asu.error) return reply(asu.error)
     igp = await getBuffer(asu.result[0].url)
     baby.sendMessage(from, igp, image, {quoted: mek})
     await limitAdd(sender)
break

/*
]=====> LIMIT MENU <=====[
*/
				case 'limit':
				                  if (isBanned) return reply(nad.baned())
				   if (!isRegistered) return reply(nad.noregis())
				   checkLimit(sender)
					break
				case 'transfer':
                  if (isBanned) return reply(nad.baned())				
				if (!isRegistered) return reply(nad.noregis())
				if (!q.includes('|')) return  reply(nad.wrongf())
                const tujuan = q.substring(0, q.indexOf('|') - 1)
                const jumblah = q.substring(q.lastIndexOf('|') + 1)
                if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
                const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                fee = 0.005 *  jumblah
                hasiltf = jumblah - fee
                addKoinUser(tujuantf, hasiltf)
                confirmATM(sender, jumblah)
                addKoinUser('6285559240360@s.whatsapp.net', fee)
                reply(`*⟪ SUKSES ⟫*\n\npengiriman uang berhasil\n➸ dari : +${sender.split("@")[0]}\n➸ ke : +${tujuan}\n➸ jumlah transfer : ${jumblah}\n➸ pajak : ${fee}`)
                break
				case 'atm':
                  if (isBanned) return reply(nad.baned())				
				if (!isRegistered) return reply(nad.noregis())
				const kantong = checkATMuser(sender)
				reply(nad.uangkau(pushname, sender, kantong))
				break
				case 'buylimit':
                  if (isBanned) return reply(nad.baned())				
				if (!isRegistered) return reply(nad.noregis())
				payout = body.slice(10)
				const koinPerlimit = 1000
				const total = koinPerlimit * payout
				if ( checkATMuser(sender) <= total) return reply(`maaf kak uang nya gak cukup, kumpulin uang nya dumlu >_< jangan open bo kak:v`)
				if ( checkATMuser(sender) >= total ) {
					confirmATM(sender, total)
					bayarLimit(sender, payout)
					await reply(`*⟪ PEMBAYARAN BERHASIL ⟫*\n\n➸ pengirim : RAMLAN ID\n➸ penerima : ${pushname}\n➸ nominal pembelian : ${payout} \n➸ harga limit : ${koinPerlimit}/limit\n➸ sisa uang : ${checkATMuser(sender)}\n\nproses berhasil dengan SN\n${createSerial(15)}`)
				} 
				break
/*
]=====> RANDOM MENU <=====[
*/
                case 'pokemon':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
                   if (!isGroup) return reply(nad.groupo())
                   if (!isNsfw) return reply(nad.nsfwoff())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=pokemon`, {method: 'get'})
					reply(nad.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					baby.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
                case 'anjing':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
                   if (!isGroup) return reply(nad.groupo())
                   if (!isNsfw) return reply(nad.nsfwoff())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anjing`, {method: 'get'})
					reply(nad.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					baby.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
					case 'neko':
					if (isBanned) return reply(nad.baned())
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nekonime?apikey=BotWeA`, {method: 'get'})
						buffer = await getBuffer(res.result)
						baby.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih nekonime mu >_<'})
					await limitAdd(sender)
					break
					case 'nsfwneko':
					if (isBanned) return reply(nad.baned())
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
						nikko = await getBuffer(`https://api.xteam.xyz/randomimage/nsfwneko?APIKEY=${XteamKey}`, {method: 'get'})
						baby.sendMessage(from, nikko, image, {quoted: mek, caption: 'Jangan Comly >_<'})
					await limitAdd(sender)
					break					
                case 'kpop':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
                                        reply(nad.wait())
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomkpop?apikey=BotWeA`, {method: 'get'})
                                        if (anu.error) return reply(anu.error)
                                        buffer = await getBuffer(anu.result)
                                        randomkpop = `*PLASTIQUE*`
                                        baby.sendMessage(from, buffer, image, {quoted: mek, caption: randomkpop})
                                        await limitAdd(sender)
                                        break								
				case 'wibu':
                if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
				data = await fetchJson(`https://api.zeks.xyz/api/nekonime?apikey=apivinz`)
				buffer = await getBuffer(data.result.result)
				baby.sendMessage(from, buffer, image, {quoted: mek, caption: 'VVibu AbiZzz :v'})
				await limitAdd(sender)
				break
				case 'loli':
                if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
				data = await fetchJson(`https://api.shizukaa.xyz/api/randomloli?apikey=itsmeiky633`)
				buper = await getBuffer(data.result)
				baby.sendMessage(from, buper, image, {quoted: mek, caption: 'Cintai Loli Mu >_<'})
				await limitAdd(sender)
				break
                case 'darkjokes':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))   
				 data = fs.readFileSync('./src/darkjokes.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                sendImage(hasil, mek, '*GELAP BOS :V*')
                await limitAdd(sender)
				break										
/*
]=====> OTHER MENU <=====[
*/				
            	case 'mining':
                      if (!isRegistered) return reply(nad.noregis())
                      if (isLimit(sender)) return reply(nad.limitend(pushname))
                      if (!isEventon) return reply(`maaf ${pushname} event mining tidak di aktifkan sama owner Ramlan`)
                      if (isOwner) {
                      const one = 999999999
                      addLevelingXp(sender, one)
                      addLevelingLevel(sender, 99)
                      reply(`karena Ramlan baik Bot memberikan ${one}Xp >_<`)
                      }else{
                      const mining = Math.ceil(Math.random() * 10000)
                      addLevelingXp(sender, mining)
                      await reply(`*selamat* ${pushname} kamu mendapatkan *${mining}Xp*`)
                      }
                    await limitAdd(sender)
					break
                case 'moddroid':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (!isPrem) return reply(nad.premium())
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/moddroid?q=${body.slice(10)}&apikey=BotWeA`)
			hepi = data.result[0] 
			teos = `*➸ Nama*: ${data.result[0].title}\n*➸ publisher*: ${hepi.publisher}\n*➸ mod info:* ${hepi.mod_info}\n*➸ size*: ${hepi.size}\n*➸ latest version*: ${hepi.latest_version}\n*➸ genre*: ${hepi.genre}\n*➸ link:* ${hepi.link}\n*➸ download*: ${hepi.download}`
			buffer = await getBuffer(hepi.image)
			baby.sendMessage(from, buffer, image, {quoted: mek, caption: `${teos}`})
			break
			case 'happymod':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (!isPrem) return reply(nad.premium())
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/happymod?q=${body.slice(10)}&apikey=BotWeA`)
			hupo = data.result[0] 
			tebs = `*➸ Nama*: ${data.result[0].title}\n*➸ version*: ${hupo.version}\n*➸ size:* ${hupo.size}\n*➸ root*: ${hupo.root}\n*➸ purchase*: ${hupo.price}\n*➸ link*: ${hupo.link}\n*➸ download*: ${hupo.download}`
			buffer = await getBuffer(hupo.image)
			baby.sendMessage(from, buffer, image, {quoted: mek, caption: `${tebs}`})
			break
					case 'pinterest':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
					baby.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=${body.slice(11)}`, {method: 'get'})
					reply(nad.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					baby.sendMessage(from, pok, image, { quoted: mek, caption: `*⟪ PINTEREST ⟫*`})
					await limitAdd(sender)
					break 
					case 'brainly':
	                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
                    brien = body.slice(9)
					brainly(`${brien}`).then(res => {
					teds = '♡───────────♡\n'
					for (let Y of res.data) {
						teds += `\n*「 BRAINLY 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n♡───────────♡\n`
					}
					baby.sendMessage(from, teds, text, {quoted: mek, detectLinks: false})
                        console.log(res)
                    })
					await limitAdd(sender)
					break
				case 'info':
					me = baby.user
					uptime = process.uptime()
					const tecs = `*➸ Nama bot* : ${me.name}\n*➸ OWNER* : ${ownerName}\n*➸ AUTHOR* : 𝗥𝗮𝗺𝗹𝗮𝗻 𝗜𝗗\n*➸ Nomor Bot* : @${me.jid.split('@')[0]}\n*➸ Prefix* : ${prefix}\n*➸ Total Block Contact* : ${blocked.length}\n*➸ The bot is active on* : ${kyun(uptime)}`
					buffer = await getBuffer(me.imgUrl)
					baby.sendMessage(from, buffer, image, {caption: tecs, contextInfo:{mentionedJid: [me.jid]}})
					break
            case 'admin':
            case 'owner':
            case 'creator':
                  baby.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
                  baby.sendMessage(from, 'Tuh Nomor Pacarku >_<, Ehh Ownerku mksdnya:v',MessageType.text, { quoted: mek} )
					break
           case 'hartatahta':
           if (isBanned) return reply(nad.baned())
           if (!isRegistered) return reply(nad.noregis())
           if (isLimit(sender)) return reply(nad.limitend(pusname))
           if (args.length < 1) return reply(`Teksnya mana kak?\nContoh : ${prefix}hartatahta BOTWA`)
           tahta = body.slice(12)
           reply('「❗」Hirti Tihti Tai Anjg :v')
           bupfer = await getBuffer(`https://api.zeks.xyz/api/hartatahta?text=${tahta}&apikey=apivinz`)
           baby.sendMessage(from, bupfer, image, {quoted: mek})
		    await limitAdd(sender)
           break
           case 'artinama':
           if (isBanned) return reply(nad.baned())
           if (!isRegistered) return reply(nad.noregis())
           if (isLimit(sender)) return reply(nad.limitend(pusname))
           if (args.length < 1) return reply(`Teksnya mana kak?\nContoh : ${prefix}artinama Ramlan`)
           umm = await fetchJson(`https://api.zeks.xyz/api/artinama?apikey=apivinz&nama=${body.slice(10)}`)
           reply(umm.result)
           await limitAdd(sender)
           break
           case 'artijodoh':
           if (isBanned) return reply(nad.baned())
           if (!isRegistered) return reply(nad.noregis())
           if (isLimit(sender)) return reply(nad.limitend(pusname))
           if (args.length < 1) return reply(`Teksnya mana kak?\nContoh : ${prefix}artijodoh Ramlan & Nadia`)
           	    var gh = body.slice(11)
				var jod = gh.split("&")[0];
				var oh = gh.split("&")[1];
           jodoh = await fetchJson(`https://api.zeks.xyz/api/primbonjodoh?apikey=apivinz&nama1=${jod}&nama2=${oh}`)
           hasilya = '「 ARTI JODOH 」\nNama : '+jodoh.result.nama1+'\nPasangan :'+jodoh.result.nama2+'\n\nPositif : '+jodoh.result.positif+'\nNegatif : '+jodoh.result.negatif
           arti = await getBuffer(jodoh.result.thumb)
           baby.sendMessage(from, arti, image, {quoted: mek, caption: hasilya})
           await limitAdd(sender)
           break
            case 'trigered':
           if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
           await limitAdd(sender)
           var imgbb = require('imgbb-uploader')
           if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
           ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
           reply(nad.wait())
           owgi = await baby.downloadAndSaveMediaMessage(ger)
           anu = await imgbb("9558de4c8e793fcb097bc82cc1c98b23", owgi)
           tezs = `${anu.display_url}`
           ranp = getRandom('.gif')
           rano = getRandom('.webp')
           anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${tezs}`
           exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
           fs.unlinkSync(ranp)
           if (err) return reply('GAGAL UM')
           nobg = fs.readFileSync(rano)
           baby.sendMessage(from, nobg, sticker, {quoted: mek})
           fs.unlinkSync(rano)
           })
           } else {
           reply('Pake foto kak')
           }
           break
/*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
]=====> OWNER MENU <=====[
*/
                case 'addprem':
					if (!isOwner) return reply(nad.ownerb())
					addp = body.slice(10)
					premium.push(`${addp}@s.whatsapp.net`)
					fs.writeFileSync('./database/user/premium.json', JSON.stringify(premium))
					reply(`Berhasil Menambahkan ${addp} Ke Daftar Premium`)
					break
				case 'dellprem':
					if (!isOwner) return reply(nad.ownerb())
					oh = body.slice(11)
					delp = premium.indexOf(oh)
					premium.splice(delp, 1)
					fs.writeFileSync('./database/user/premium.json', JSON.stringify(premium))
					reply(`Berhasil Menghapus ${oh} Dari Daftar Premium`)
					break					
				case 'bc':
					baby.updatePresence(from, Presence.composing) 
				     if (!isOwner) return reply(nad.ownerb())
					if (args.length < 1) return reply('.......')
					anu = await baby.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await baby.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							baby.sendMessage(_.jid, buff, image, {caption: `*「 BABY BROADCAST 」*\n\n${body.slice(4)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BABY BROADCAST 」*\n\n${body.slice(4)}`)
						}
						reply('*「 SUKSES BOSKU 」*')
					}
					break
				case 'bcgc':
				     if (!isOwner) return reply(nad.ownerb())
					if (args.length < 1) return reply('Teksnya mana bosku >_<')
					anu = await groupMembers
					nom = mek.participant
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await baby.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							baby.sendMessage(_.jid, buff, image, {caption: `*「 BC GROUP 」*\n\n➸ Dari Grup : ${groupName}\n➸ Pengirim : wa.me/${(sender.split('@')[0])}\n➸ Pesan : ${body.slice(6)}`})
						}
						reply('*「 SUKSES BOSKU 」*')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BC GROUP 」*\n\n➸ Dari Grup : ${groupName}\n➸ Pengirim : wa.me/${(sender.split('@')[0])}\n➸ Pesan : ${body.slice(6)}`)
						}
						reply('*「 SUKSES BOSKU 」*')
					}
					break
					case 'setreply':
					if (!isOwner) return reply(nad.ownerb())
                    baby.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					cr = body.slice(10)
					reply(`reply berhasil di ubah menjadi : ${cr}`)
					await limitAdd(sender)
					break
				case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(nad.ownerb())
					prefix = args[0]
					reply(`*「 SUKSES 」* Prefix jadi ➸ : ${prefix}`)
					break
				case 'clearall':
					if (!isOwner) return reply(nad.ownerb())
					anu = await baby.chats.all()
					baby.setMaxListeners(25)
					for (let _ of anu) {
						baby.deleteChat(_.jid)
					}
					reply(nad.clears())
					break
			       case 'block':
				 baby.updatePresence(from, Presence.composing) 
				 baby.chatRead (from)
					if (!isGroup) return reply(nad.groupo())
					if (!isOwner) return reply(nad.ownerb())
					baby.blockUser (`${body.slice(7)}@c.us`, "add")
					baby.sendMessage(from, `perintah Diterima, memblokir ${body.slice(7)}@c.us`, text)
					break
                    case 'unblock':
					if (!isGroup) return reply(nad.groupo())
					if (!isOwner) return reply(nad.ownerb())
				    baby.blockUser (`${body.slice(9)}@c.us`, "remove")
					baby.sendMessage(from, `Perintah Diterima, membuka ${body.slice(9)}@c.us`, text)
					break   				
					case 'setppbot':
					if (!isOwner) return reply(nad.ownerb())
				    baby.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await baby.downloadAndSaveMediaMessage(enmedia)
					await baby.updateProfilePicture(botNumber, media)
					reply('Makasih profil barunya bosku😗')
					break
				case 'clone':
					if (!isGroup) return reply(nad.groupo())
					if (!isOwner) return reply(nad.ownerg())
					if (args.length < 1) return reply(' *TAG YANG MAU DI CLONE!!!* ')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await baby.getProfilePicture(id)
						buffer = await getBuffer(pp)
						baby.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply(nad.stikga())
					}
					await limitAdd(sender)
					break
			                case 'ban':
					if (!isOwner) return reply(nad.ownerb())
					bnnd = body.slice(6)
					ban.push(`${bnnd}@s.whatsapp.net`)
					fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
					reply(`Nomor ${bnnd} telah dibanned!`)
					break
				case 'unban':
					if (!isOwner) return reply(nad.ownerb())
					ya = body.slice(8)
					unb = ban.indexOf(ya)
					ban.splice(unb, 1)
					fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
					reply(`Nomor ${ya} telah di unban!`)
					break
				case 'resetlimit':
				if (!isOwner) return reply(nad.ownerb())
				var ngonsol = []
				rest = _limit.indexOf()
				_limit.splice(rest)
				fs.writeFileSync('./database/user/limit.json', JSON.stringify(ngonsol))
				reply(`LIMIT BERHASIL DI RESET BOS`)
				break
// SOUND					
case 'iri':
                if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
const irimp3 = fs.readFileSync('./assets/iri.mp3');
baby.sendMessage(from, irimp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
await limitAdd(sender)
break
case 'pale':
                if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
const pa = fs.readFileSync('assets/pale.mp3')
baby.sendMessage(from, pa, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
await limitAdd(sender)
break
case 'sound1':
                if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
satu = fs.readFileSync('./assets/sound1.mp3');
baby.sendMessage(from, satu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
await limitAdd(sender)
break
case 'sound2':
                if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
dua = fs.readFileSync('./assets/sound2.mp3');
baby.sendMessage(from, dua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
await limitAdd(sender)
break
case 'sound3':
                if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
tiga = fs.readFileSync('./assets/sound3.mp3');
baby.sendMessage(from, tiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
await limitAdd(sender)
break
case 'sound4':
                if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
empat = fs.readFileSync('./assets/sound4.mp3');
baby.sendMessage(from, empat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
await limitAdd(sender)
break
case 'sound5':
                if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
lima = fs.readFileSync('./assets/sound5.mp3');
baby.sendMessage(from, lima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
await limitAdd(sender)
break
case 'sound6':
                if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
enam = fs.readFileSync('./assets/sound6.mp3');
baby.sendMessage(from, enam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
await limitAdd(sender)
break
case 'sound7':
                if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
tujuh = fs.readFileSync('./assets/sound7.mp3');
baby.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
await limitAdd(sender)
break
case 'sound8':
                if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
lapan = fs.readFileSync('./assets/sound8.mp3');
baby.sendMessage(from, lapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
await limitAdd(sender)
break
case 'sound9':
                if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
bilan = fs.readFileSync('./assets/sound9.mp3');
baby.sendMessage(from, bilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
await limitAdd(sender)
break
case 'sound10':
                if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
puluh = fs.readFileSync('./assets/sound10.mp3');
baby.sendMessage(from, puluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
await limitAdd(sender)
break														
/*
]=====> Ingfo <=====[
Author : Ramlan
Recode by : Nama lu
]=====> TQTO <=====[
Ramlan ID
MrG3P5
Nafiz
Revoer ID
Itsmeiky
Vinz
XTEAM
Vhtear
Tobz
All BOT WE A
All Creator Bot WhatsApp
Credits : BABY BOT
=======================
Note : Ingat bro menghapus Author, ThanksTo, Credits. Itu sama aja kau Nyampah doang :v
*/			                     default:
                  if (budy == 'cekprefix') {
                  reply(`*${botName} MENGGUNAKAN PREFIX :「 ${prefix} 」*`)
                  }
			if (isGroup && !isCmd && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
				//		reply(ind.cmdnf(prefix, command))
					} else {
						console.log(color('[ERROR]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
					}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
