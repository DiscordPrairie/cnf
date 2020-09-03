// 관리
const Discord = require('discord.js'); // cmd에서 "npm install discord.js" 필수로 입력함,
const request = require('request'); // 웹크롤링 모듈 cmd에서 "npm install request" 필수로 입력함,
const cheerio = require('cheerio'); // 웹크롤링 모듈 cmd에서 "npm install cheerio" 필수로 입력함,
const moment = require("moment"); // 정보 모듈 cmd에서 "npm install moment" 필수로 입력함,
require("moment-duration-format"); // 정보 모듈 cmd에서 "npm install moment-duration-format" 필수로 입력함,
const Token = process.env.token; // 봇의 토큰을 입력하세요.
const botinfo = `출퇴근 체크` // 봇의 상태메시지를 입력하세요.
const client = new Discord.Client();

// 봇 실행
client.on('ready', () => {
		console.log('봇 준비완료');
        client.user.setPresence({
            activity: {
                name: botinfo
        },
        status: 'online'
    });
});

client.on('message', async message => {
    if (message.author.bot) return;
    
if (message.content.startsWith('!출근')) {
    var d = new Date();
    var currentData = d.getFullYear() + "년 " + (d.getMonth() + 1) + "월 " + d.getDate() + "일 ";
    var currentTime = d.getHours() + "시 " + d.getMinutes() + "분 ";
    var time1_embed = new (require('discord.js').MessageEmbed)()
    time1_embed.setTitle('출근하였습니다.')
    time1_embed.setDescription('``출근``')
    time1_embed.addField('출근한 유저', `${message.author.tag}`, true)
    time1_embed.addField('출근 시간', `${currentData + currentTime}`, true)
    time1_embed.setFooter("Made by Thanos#1665")
    time1_embed.setColor("#fc6400")
    message.channel.send(time1_embed)
    }
 if (message.content.startsWith('!퇴근')) {
    var d = new Date();
    var currentData = d.getFullYear() + "년 " + (d.getMonth() + 1) + "월 " + d.getDate() + "일 ";
    var currentTime = d.getHours() + "시 " + d.getMinutes() + "분 ";
    var time2_embed = new (require('discord.js').MessageEmbed)()
    time2_embed.setTitle('퇴근하였습니다.')
    time2_embed.setDescription('``퇴근``')
    time2_embed.addField('퇴근한 유저', `${message.author.tag}`, true)
    time2_embed.addField('퇴근 시간', `${currentData + currentTime}`, true)
    time2_embed.setFooter("Made by Thanos#1665")
    time2_embed.setColor("#fc6400")
    message.channel.send(time2_embed)
    }

   
});

    client.login(Token);