import discord
import math
import random

client = discord.Client()
class bot:
	def __init__(self, blight, rats_r_cool, cats, orbtalk):
		self.blight = blight
		self.rats = rats_r_cool
		self.cats = cats
		self.orbtalk = orbtalk


currentBot = bot(1,1,1,0)

@client.event
async def on_ready():
	print('We have logged in as {0.user}'.format(client))

@client.event
async def on_message(message):
	n = 1
	content = message.content.lower()
	if message.author == client.user:
		return
	if(message.author == "elytra.f#3331"):
		if(content == "please stop the rat essay"):
			await message.channel.send('Sorry, Alexa. I\'ll stop now.')
			currentBot.blight = 0
		elif(content == "please stop rats r cool"):
			await message.channel.send('Sorry, Alexa. I\'ll stop now.')
			currentBot.rats = 0
		elif(content == "please stop cats r rats"):
			await message.channel.send('Sorry, Alexa. I\'ll stop now.')
			currentBot.cats = 0
		elif(content == "please start the rat essay"):
			await message.channel.send('No problem, Alexa! I\'ll start now.')
			currentBot.blight = 1      
		elif(content == "please start rats r cool"):
			await message.channel.send('No problem, Alexa! I\'ll start now.')
			currentBot.rats_r_cool = 1
		elif(content == "please start cats r rats"):
			await message.channel.send('No problem, Alexa! I\'ll start now.')
			currentBot.cats = 1
		elif content.find(' orb ') > = 0:
			if currentBot.orbtalk == 0:
				await message.channel.send('I, too, have a phD in orbology. I would enjoy having a reasoned discussion about orbs.')
			else:
				orbvalue = randint(0, 10)
				if orbvalue == 1:
					await.message.channel.send('My orbology thesis was about recurrent neural networks but with o r b s')
		elif content.find('x^2') >= 0:
			a = ""
			negative = 0
			if(content.find('x^2') != 0):
				x = content.find('x^2') - 1  
				while((content[x].isnumeric() or content[x] == ".")and x >= 0):
					x = x - 1
				x2 = x
				while((content[x2] == " " or content[x2] == "-") and x2 >= 0):
					if(content[x2] == "-"):
						negative = 1
					x2 = x2 - 1
				while x != content.find('x^2') - 1:
					x = x + 1
					a = a + content[x]
				if(a == ""):
					a = 1
			else:
				a = 1
			a = float(a)
			if(negative == 1):
				a = -1 * a
				
			b = ""
			negative2 = 0
			ncontent = content[(content.find('x^2') + 1):]
			if ncontent.find('x') > 0:
				bx = ncontent.find('x') - 1  
				while((ncontent[bx].isnumeric() or ncontent[bx] == ".")and bx >= 0):
					bx = bx - 1
				bx2 = bx
				while((ncontent[bx2] == " " or ncontent[bx2] == "-") and bx2 >= 0):
					if(ncontent[bx2] == "-"):
						negative2 = 1
					bx2 = bx2 - 1
				while bx != ncontent.find('x') - 1:
					bx = bx + 1
					b = b + ncontent[bx]
				if(b == ""):
					b = 1
			else:
				b = 0
			b = float(b)
			if(negative2 == 1):
				b = -1 * b
			
			c = ""
			negative3 = 0
			newcontent = ncontent[(ncontent.find('x') + 1):]
			for i in newcontent:
				if i.isnumeric():
					c = c + i
				if i == "-" and c == "":
					negative3 = 1
			if c == "":
				c = 0
			c = float(c)
			if negative3 == 1:
				c = -1 * c
			
			if (b**2 - 4*a*c >= 0):
				zero1 = (-b+math.sqrt(b**2-4*a*c))/(2*a)
				zero2 = (-b-math.sqrt(b**2-4*a*c))/(2*a)
				await message.channel.send("The orb shows me that the zeroes of this equation are " + str(zero1) + " and " + str(zero2) + ".")
			else:
				await message.channel.send("This equation does not have any real solutions.")
			
	if content.find('rats are a blight upon society') >= 0:
		await message.channel.send('Many misinformed people consider rats to be a blight upon society. However, rats serve many beneficial roles to the good of humanity. They help treat diseases, balance the ecosystem, and improve the soil. The thesis is that rats are good. \n First, rats are invaluable to treating diseases. Their short lifespan and small number of genes makes them extremely adaptable, and easily analyzed test subjects. Countless diseases have been cured in part of because of extensive testing on rats. This is why lab rats are very common and a major staple of scientific labs. Many vaccines are developed ast testing for rats, and a lot of life-saving medicine has been developed this way. \n Second, rats are very important to the ecosystem. There are many forms of weeds and pests that rats help eradicate, including many different kinds of insects. Rats help get rid of these awful pests and improve life for everyone. In addition, they can also serve as food for larger predators, like eagles or owls, which serve their own purpose in cleaning up the skies, and are majestic predators in their own right. \n Third, rats help dig up soil. They serve a similar role to earthworms, except they can live  in much more places than earthworms. They burrow into the ground, which helps make the soil more loose. This makes it more resistant to natural disasters and easier for plants to grow on this soil. There are many places that would be barren if not for rats. \n In conclusion, rats serve a valuable purpose in the world, and should not be exterminated. This is because they help cure diseases, help sustain the ecosystem, and help plants grow. You can do something about this by saying "thank you" to the next rat you meet. The end.')
	elif (content.find(' rat') >= 0 or content.find('rat') == 0 or content.find(' rats') >= 0 or content.find('rats') == 0) and currentBot.rats == 1:
		await message.channel.send('rats r cool')
	elif (content.find(' cats') >= 0 or content.find('cats') == 0) and currentBot.cats == 1:
		await message.channel.send('cats r rats')
	elif content.find(' dio ') >= 0 or content.find('dio ') == 0:
		await message.channel.send('DIOOOOOOOOOOOOOOOOOOOO')

client.run("Njg3NDI2MTA4NDc1NDQxMjgw.Xmnzyw.AvQzfYTwRAyAbXZorMbxGqcjmjY")