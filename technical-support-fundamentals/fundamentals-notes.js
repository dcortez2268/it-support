/*
//*************************************************************************************************** 
//  Title: Technical Support Fundamentals Course
//  Author: Google, completed on courseera.com
//  Part 1 of 5
//***************************************************************************************************

//*************************************************************************************************** 
//  SUPPLUMENTAL RESOURCES
//***************************************************************************************************
logic gates: https://simple.wikipedia.org/wiki/Logic_gate,
cpu caches: https://en.wikipedia.org/wiki/CPU_cache,
how to overclock cpu: https://www.digitaltrends.com/computing/how-to-overclock-your-cpu/,
kilobyte storage system: https://en.wikipedia.org/wiki/Kilobyte,
inductive charging: https://en.wikipedia.org/wiki/Inductive_charging,
safe-handling lithium batteries: https://www.osha.gov/sites/default/files/publications/shib011819.pdf,
windows batteries: https://docs.microsoft.com/en-us/windows-hardware/design/device-experiences/powercfg-command-line-options#option_batteryreport,
mac batteries: https://support.apple.com/en-us/HT201585,
maximize apple batteries: https://www.apple.com/batteries/maximizing-performance/,
maximize android batteries: https://support.google.com/android/answer/7664692?visit_id=637787575046899271-1429714117&rd=1,
usb peripherals: https://en.wikipedia.org/wiki/USB,


//*************************************************************************************************** 
//  BASIC VOCAB
//***************************************************************************************************
What is information technology?:
the use of digital technology, like computers and the internet, to store and process data into useful information
what is it support?:
helping people use technology to solve meaningful problems.  IT support also helps us share and use technology together.  

computer: device that stores and processes data by performing calculations,
algorithm: series of steps that solve specific problems,
cryptography: the art of writing and solving codes,
open-source code: code that can be viewed, shared, or modified by anybody,
binary system: the communication that a computer uses, also known as a base-2 numeral system,
bits: binary digit, either a 0 or 1, smallest representation of data that a computer can understand.  a 1 represents true while a 0 represents false,

byte: a group of 8 bits,
character encoding: assigns our binary values to characters, so that we as humans can read them,
ascii: first popular character encoding standard,
utf-8: most prevelent character encoding standard used today, allows us to compose a character of more than one byte to build endless possibilities of characters,
logic gates: allow our transistors to do more complex tasks, like decide where to send electrical signals depending on logical conditions,
abstraction: to take a relatively complex system and simplify it for our use, hides complexity by providing common interface,
programs: instructions that tell the computer what to do,
charge cycle: one full charge and discharge of battery,
file extension: the appended part of a filename that tells us what type of file it is in certain operating systems,
process: a program that's executing, like our internet browser or text editor,
program: an application that we can run, like chrome,
time slice: a very short interval of time that gets allocated to a process for cpu execution,
hexadecimal: a way to represent numbers using 16 digits, letters abcdef represent 10.11.12.13.14.15,
octet: any number that can be represented by 8 bits,
dotted decimal notation: four octets represented by decimal numbers,
buffer: computing technique where a certain amount of data is held somewhere, before being sent out somewhere else,








computer can be cut into four main layers:
    hardware: made up of physical components of a computer 
    operating system: allows hardware to communicate with system
    software: how we as humans interact with our computer
    users: interacts with computer, most important layer that an it support deals with


//*************************************************************************************************** 
//  WEEK 2: HARDWARE
//***************************************************************************************************

ports: connection points that we can connect devices to that extend the functionality of our computer,
hard-drive: contains long term memory, holds all of our data, ex applications, pictures, files, etc
power source,
EDB: external data bus, rows of wires that interconnect components, this is how we send bytes around computer,
Address bus: connects CPU and MCC, cpu sends addresses of data
MCC: memory control chip, bridge between cpu and ram, sneds data via ebd,
cache: smaller, faster, more expensive than RAM, used to store recently or frequently used data.  There are 3 different cache levels: L1, L2, L3

clock wire: lets cpu know when it can do calculations,
clock cycle: when you send voltage through clock wire,
clock speed: maximum number of clock cycles that it can handle in a certain time period,
overclocking: increasing rate of clock cycle beyond maximum to be able to handle more tasks, but overheating can occur

CPU: central processing unit, the brain of our computer, it does all the calculations and data processing, reads instructions from RAM
instruction sets: different operations our computer can carry out, each manufacturer has different instruction set but generally perform same functions
registers: are inside cpu,

when you select your CPU, you'll need to make sure it's compatible with your motherboard sockets (either LGA or PGA)
heat sink: dissipates heat from cpu through a fan,
difference between 32 bit and 64 bit cpu architecture is how many bits it can efficiently handle

RAM: random access memory, our computer's short term memory,
ram sticks need to be compatible with motherboard
ram is volatile, whenever powered down ram is cleared,
DRAM: dynamic random-access memory: ram that's commonly found in computers, dimm sticks are dual inline memory module sticks that dram chips can be put on
SDRAM: syncronous DRAM, synchronized ram with computers clock speed,
double data rate SDRAM OR DDR SDRAM or DDR: we use this type of ram in today's systems DDR4, 

motherboard: the body or ciculatory system of the computer that connects all the pieces together,
has a few key characteristics:
chipset: decides how components talk to each other,
northbridge: interconnects stuff like ram and video cards
southbridge: manages i/o controllers
expansion slots: give us the ability to increase the funcitonality of our computer,
form factor: sizes that determine amount of stuff we can put in it, ex is advanced technology etended (larger) or information technology extended (smaller)


peripherals: external devices we connect to our computer that extend functionality, like mouse, keyboard, monitor, etc,
usb 2.0: transfer speeds of 480 mb/s, black
usb 3.0: transfer speeds of 5 Gb/s, blue
usb 3.1: transfer speeds of 10 Gb/s, teal

type-c connector is quickly becoming standard for display and data transfer and replacing a lot of connectors,
dvi: generally just output video, not audio,
hdmi: outputs both video and audio,
displayport: outputs both video and audio


storage: 
data sizes:
smallest unit of data storage is bit,
1 byute = 8 bits,
1024 bytes = 1 KB,
1024 KB = 1 MB,
1024 MB = 1 GB,
1024 GB = 1 TB

MB is megabyte or unit of data storage, while Mb/s is a megabit per second, which is a unit of data transfer rate
why it matters: to transfer a 1MB file in a second, you need an 8 Mb/s connection speed

2 TYPES OF HARD DRIVES:
HDD: hard disk drives, use spinning platter and mechanical arm to do crud operations,
rpm: revolutions per minute depicts how fast HDD is, prone to damage but more affordable
SSD: solid state drive, no moving parts, information is stored on microchips so is a lot faster but more expensive 

interfaces that hard drives use to connect to our system: 
ATA interfaces are most popular, hot swappable, uses cable to connect to machine,
NVM express or NVMe : interface standard that uses expansion slot instead of cable that allows greater throughput and increased efficiency

two types of power: DC AND AC
Power supply unit or PSU: converts AC power comes from wall to DC power because computers use DC power
voltage: refers to pressure of electricity
as a general rule, be sure to use correct voltage for your electronics
amperage: amount of electricity coming out, measured in AMPS, if a charger has more amps than it can charge your device faster
wattage: the amount of volts and amps that a device needs,
you can power most desktops with a 500 watt power supply,

voltage pushes electricity, amps pull electricity

mobile devices have all the same components as desktop, but smaller and more integrated 
some use SoC: packs the cpu, ram, and sometimes the storage onto a single chip

be careful when handling batterys because they can break or be very dangerous,

BIOS: basic input output services, software that helps initialize the hardware in our computer and gets our operating system up and running.   drivers are loaded from hard drive once the operating system loads.  (It checks for drivers but does not install them)   Our motherboard stores the BIOS in a special type of memory called the read only memory chip, or ROM chip.
ROM IS: non volatile,
In today's system there is another player for BIOS called UEFI.
Unified Extensible Firmware Interface: performs same function as BIOS traditionally did, however more modern, better compatibility, and support for newer hardware.  Most hardware comes with UEFI built in.
CMOS battery contains BIOS settings.  Can be changed in BIOS settings menu when powering up usually.

POST: powere on self test, test to make sure hardware is working correctly, BIOS runs it when you boot up your computer.  Different beep codes help identify problems and are very helpful when troubleshooting.    

disk image: copy of an operating system
reimaging of a computer: involves wiping and reinstalling an operating system.  done by using BIOS to tell computer to boot up from external device with program that contains reimaging instructions.  

drivers, or services: contain instructions cpu needs to understand external devices. it has to connect to bios first.

putting computer together notes:
    standoffs: are used to raise and attach motherboard to case,
    molex connectors: bring dc power to the drives inside a pc case, 
    sata adapters: most popular connectors for sata devices today. a molded plastic piece with four sockets in a row. sata device is a serial advanced technology attachment, a computer bus interface used to connect host bus adapters with mass storage devices like optical drives and hard drives.
    when done and if computer does not turn on check:
    connectors are in right place,
    wattage used is powerful enough to power computer

    general process for mobile and computer assembly:
        protect against static discharge,
        use the right tools,
        keep parts organized and labeled.  Taking pictures can help too.,
        follow vendor documentation,
        test device to make sure it works

RMA, return merchandise authorization : your organization will have these outlines for determining how or when parts are replaced.  when considering mobile device repair, be sure to check the warranty won't be voided whenever fixing a certain part. 
factory reset: removes all data, apps, and customizations from the device.





//*************************************************************************************************** 
//  WEEK 3: Operating Systems
//***************************************************************************************************

Remote connection and SSH:

remote connection: allows us to manage multiple machines from anywhere in the world,
SSH (secure shell) : a protocol implemented by other programs to securely access one computer from another,
to use ssh: 
you need a ssh program downloaded on client and server (software on other computer that authenticates request)

OpenSSH: most popular program for linux to use ssh protocol,

PuTTY: most popular windows program to use ssh protocol, a free open source software that you can use to make remote connections through several network protocols, including SSH
hostname, port, and connection type are important, default port set to 22, all you need to do is type in host name or ip address of computer you wish to connect to,
has gui but you can use command line with powershell or inbuilt command line tool plink,
helpful for shared file servers, and running virtual machines with os running remotely (ubuntu)

ssh not very secure unless you implement Private and Public ssh keys so you can use...,
VPN: virtual private network: more sophisticated than ssh, allows you to connect to a private network like your work network, over the Internet.  use case is to access resources like shared filed servers and network devices. 

RDP (Remote Desktop Protocol): provides graphical user interface to remote computers. provided the remote computer has enabled incoming RDP connections.  
Microsoft terminal services client or mtsc.exe : client used to create RDP connections to remote computers that have enabled incoming RDP connections

COMPONENTS OF OPERATING SYSTEM
operating system: whole packages that manages our computer's resources and lets us interact with it,

two main parts: 
kernal: main core of an OS that talks directly to our hardware and manages our systems resources,
users space: everything outside the kernel, like programs, user interfaces, manages how we interact with the hardware

MAIN OS'S TODAY:
Windows: Windows
Mac Os: Apple
Linux OS: open source software (kernel), that is used heavily in business infrastructure and consumer space,
distributions: kernels, most popular linux distributions are Ubuntu, Debian, Red hat,
many companies package their own version of it

Chrome OS: has started to gain popularity, run linux distributions under the hood,
one main purpose: to be a secure and simple way for the user to interact with the web, no need to worry about harmful software,
web-browsing operating system, and can run Linux and Android applications inside containers,
        interchangeable because most data is stored in cloud, not locally,
        users do not have administrator rights so can not alter system configuration,
        
        Android OS: used in mobile device, run linux distributions under the hood
        iOS:used in Appple mobile device,
        Windows 10 Mobile used in Microsoft mobile device
        
        
        Main functions of kernel: file management, process management, memory management, and virtual memory
        
        file management: file systems that manage files, three main components are the file data, metadata, and file system,
        process management: process scheduler allows multitasking, creates processeses, efficiently schedules them, and manages how processes are terminated,
        
        memory management: makes sure our applications have enough memory to run, implements virtual memory, paging,
        virtual memory: the combination of hard drive space and RAM that acts like memory that our processes can use.  it gives us more memory than we physically have.  
        swap space: space on our hard drive allocated for virtual memory
        executing a process: data of program is stored in chunks called pages.  These pages are stored in virtual memory.  Then sent to RAM to be executed.  
        
        i/o managment: manages how kernel talks to I/O devices like disks, keyboards, connections, audio devices, and more. 
        manages communication between devices, data sent from devices, 
        
        I/O Devices: anything that gives us input or that we can use for output of data.
        
        How we interact with Os: 
        (CLI) Shell: use text commands to interact with computer, interprets text commands and sends them to the os to execute
        Bash, or Bourne Again Shell: popular Linux shell
        PowerShell: popular Windows shell,
        shell is powerful because some commands can only be accessed through shell and automates tasks for your systems
        Graphical User Interface (GUI): visual way to interact with computer
        
        logs: files that record system events on our computer, just like a system's diary, are helpful when troubleshooting,
        
        boot process: starting a computer, to start from nothing and follow a series of steps to arrive at a fully operational system,
        general steps:
        computer is powered on,
        bios/uefi runs POST,
        different devices are booted up determined by boot order,
        bootloader runs, small program that loads up the os,
        kernel is then loaded,
        essential system processes and user space items are launched
        
        Mobile OS:
        optimized to use as little power as possible,
        especially optimized for more specialized mobile devices like fitness trackers etc,
        
        ///////////////
        Installing OS
        ///////////////
    operating systems in use by an organization have a lot to do with applications and systems they need to run, 
    as an it support specialist, you'll install an os many times,
    
    Virtual machine (VM): software that emulates copy of real machine, allows us to run multiple OS on computer,
    
    virtualbox: popular virtual machine application
    
    Installing Windows: was very straightforward, follow prompts given started from hitting f12 and loading os on thumb drive
    Installing Linux: 
    many different distributions, 
        for this ex, she uses Ubuntu,
        dowload free operating system from website, has to be copied in a way that makes a usb device bootable from our BIOS, you can use tool like etcher.io to load image onto usb device and make it bootable,
        Installing MacOS: comes pre loaded onto apple software
        
//*************************************************************************************************** 
//  WEEK 4: Networking
//***************************************************************************************************
    
network: an interconnection of computers,
the internet: the physical connection of computers and wires around the world,
the web: information on the internet,
    you access the internet through the Web

ISP (internet service provider) : connects millions of computers together in one network through cables, connect to other networks and other ISPs.  together, form the Internet.

you need both an IP and MAC address to send or receive data through a network.  You can think of IP address as house address and MAC address as recipient.
    IP address: unique identifer for computer on a networks that serves as an address.
    MAC address: unique identifier that is generally permannent and hard coded onto a device. 
        OUI: first three octets of mac address that identify manufacturer of a network interface,
    

packets: smallest units of data that are sent through network, 
how data moves from client to server and back: data is sent through packets through a series of networks, until it eventually reaches destination and packets are reassembled,

Ethernet cable: lets you physically connect to network through cable,
Wifi, Wireless Internet: wireless connections to these networks,
fiber optics: most expensive, greatest speed, moves data through light instead of electricity,

2 different network connectors:
router: connects lots of different devices together and helps route network traffic,

switches: you can think of switches like mailrooms in a building, where the router gets the packet to the building.  So essentially once it gets to target network, the switch determines where packets go.  

networking protocols: you can think of network protocols as a set of rules for how we transfer data in a network.  
    These rules ensure packets:
        are routed efficiently,
        aren't corrupted,
        are secure, 
        go to right address and named appropriately

TCP/IP protocol (Transmission Control Protocol/Internet Protocol) : predominant protocols of the internet.  
    Internet protocol helps us route information and implements IP address,
    TCP handles reliable delivery of information from one network to another

URL, Uniform Resource Locator: web address,
DNS, Domain Name System: protocol that maps web address to IP address,
ICANN, Internet Corporation for Assigned Names and Numbers: when a domain gets taken it gets registered to ICANN and cannot be taken by anyone else unless you make available again.
IANA: in charge of distributing IPs

LIMITATIONS OF INTERNET:
    Ipv4: current version of IP addresses, number of usable IP addresses have run out,
    Ipv6: Internet Protocol version 6 addresses: slow and steady adoption, has increased the number of usable IP addresses and won't run out for a very long time,

    NAT, Network Address Translation: allows organizations to use one public IP address and many private IP addresses within the network.  has helped mitigate running out of IP addresses.

globalization: the movement that lets governments, businesses, and organizations communicate and integrate together on an international scale,

IOT, Internet of Things : smart devices connected over wireless networks form network,

//*************************************************************************************************** 
//  WEEK 5: Software
//***************************************************************************************************
software: instructions that tell hardware what to do, how we as users, directly interact with our computer, interchangeable with programs, applications
coding: translating one language to another,
scripting: coding in a scripting language, used to perform a single or limited range task,
programming: coding in a programming language,

copyright: used when creating original work,
software is protected by copyright as well,


application software: software created to fulfill a specific need, like text editor, browser, or graphics editor.
system software: software used to keep our core system running, 
firmware: system software that's permanently stored on a computer component, ex. BIOS

assembly language: allowed computer scientists to use human readable instructions, assembled into code that the machines could understand.  Slightly higher level of programming above binary code.  
compiled programming lanugages: takes human instructions and compiles them into machine instructions.
interpreted languages: aren't compiled ahead of time, usualy a script, runs cpu instructions at run-time
software bug: error in software that causes unexpected results,

.exe file extension: executable file in Windows,

automation: makes processdes work automatically,
programs and scripts can help you automate troubleshooting issues, and making processes more efficient and easier,

//*************************************************************************************************** 
//  WEEK 6: Troubleshooting
//***************************************************************************************************
troubleshooting: the ability to diagnose and resolve a problem,
root cause: main factor that's causing a range of issues,


Troubleshooting best practices:

    Asking Questions:
        essential first step is to ask questions to gather all data and understand situation better,
    Isolating Problem:
        meant to shrink the scope of problem, so that you know you're looking in the right area,
    Follow the cookie crumbs:
        requires you to go back where problem first started (root cause), and troubleshoot from there,
    Start with quickest step first:
        startick with quickest step first will lead to troubleshooting and resolving issues effectively and efficiently
    
Pitfalls to avoid:

    Going into autopilot:
        leads to errors,
    not finding root cause:
        spend a little extra time investigating issue instead of trying to find small hacks, can save a lot of time and effort in the end
    
//*************************************************************************************************** 
//  WEEK 6: Customer Service
//***************************************************************************************************
customer service and soft skills are essential to tech support,

four essential techniques for good customer service:
exhibiting empathy:
put yourselves in their situation and understand how they are feeling
    being conscious of your tone:
    try to have a friendly and curious tone to improve user experience, but not overboard with friendliness
    acknowledging the person your talking to:
    reduces tension and helps you understand how you're working towards a solution,
    confirm the user's issue before you start to troubleshootm
    developing trust with the user:
    empathy and acknowledgement are a huge part of building trust,
    be honest with user, even if you think they may be unhappy about it,
    
    first impressions last a lifetime:
    be professional, acknowledge the user and demonstrate your desire to help them, show them some respect,
    prepare in advance for things you know you struggle with, including first impressions to ensure they go well,
    
    try to remember a personal fact that they've mentioned and bring it up later, but don't force it if you are not one to make small talk,
make sure you tell user what you're doing before you do it,
if user asks you question while your working on a previous question, let the user know that you're working on their issue and will be sure to answer all of their questions once you're done,

make sure to end on positive note because the last five minutes will set the tone on how user feels about interaction.  Reiterate solution, state next steps, ask if there are questions.  

different techniques to deal with difficult situations:
identify where the interaction went wrong in the moment and redirect the conversation:
hardest to do but most effective if you can objectively look at interaciton,
try pausing or talking slow if user keeps elevating and talking over you to calm the situation down,
be patient when client ignores instructions and break it down for them,

//*************************************************************************************************** 
//  WEEK 6: Ticketing Systems and Documenting your work
//***************************************************************************************************
systems and processes are always changing, and so should your documentation,
important to be concise, and precise

    ticketing or bug system:
    help you track user issues, communicate with your users, and provide updates,
    some popular systems are Bugzilla, JIRA, and Redmine,
    tickets can be updated to document trail of process of what is going on, 
    important to leave audit trail to see what worked and didn't

//*************************************************************************************************** 
//  WEEK 6: Technical Interviews
//***************************************************************************************************

your resume is important because it is your first introduction to a company:
    make sure it clearly shows you are a good fit,
    avoid using filler text, stick to relevant qualifications,
    A “Functional” or “Skills based” resume format works well for new graduates or candidates with limited work experience. The focus of this format is more around your skillset, rather than your work experience. You can include a brief summary of qualifications, followed by a list of skills with examples for each. This format works well for candidates with less employment history, but lots of applicable skills.,
    List out achievements, not just tasks performed, and make them quantifiable. Use the sentence format of Action Verb + Specific Task + Quantifiable Point”. For example: “Automated imaging process for new computers, reducing 90% of manual work for the IT team.”,
    You should be tailoring your resume to each job you’re applying to. Sending generic resumes to as many roles as possible, is not a good strategy. A targeted approach is always better.
    If you are applying for an IT support role, you may want to highlight your customer support experience, even if it only comes from a volunteer organization at your university.  Whereas, if you are applying for a programming job, you’ll want to highlight your software development experience, regardless of whether it was acquired in university or on the job.

make sure online professional presence is in order:
    have current resume,
    look professional,
    use linkedin,
    portfolio page,


when applying for job:  
    read description, make sure it's a good fit for you, make sure you know topics very well,
    research company: 
        look for things that are new, interesting and exciting.  challenges company might be facing.  main characteristics. primary products/services. customers. mission statement. 

    getting ready for interviews:
        practice makes perfect, do mock interviews,
        have good elevator pitch,
        be prepared for technical interview

    creating elevator pitch:
        goal is to explain who you are, what you do, and why other person should be interested in you,
        very short summary of who you are and what kind of career your looking for,
        what your passionate about,
        what your looking for in a new role currently or after x,
        keep it personal,

    interview tips:
        get plenty of sleep,
        good breakfast,
        make eye contact,
        nod to indicate understanding,
        ask follow up questions: you are interviewing them as much as they are interviewing you,
        remember to slow down pace




    
        
//*************************************************************************************************** 
//  soft skills
//***************************************************************************************************
Q. what got you into technology/it field?
A. i was hooked when...

Q. tell us about yourself?
follow format of...
where are you from?
hopes and goals?: ie why are you here? are you excite?  what do you hope happens with your life when you are finished with this course? 
job and education?  what you currently do?
other info?: what common interests might you share with your classmates?  let us know something that will help us connect with you?
A. Hello all, my name is Dominick Cortez and I am from Indianapolis, Indiana but currently reside in Seattle, Washington.  I hope to expand my knowledge of computer hardware, networks, and any other relevant topics in IT support to gain an entry level job in IT support.  I have a Bachelor's in Computer Science with a concentration in software engineering which led to inspiring me to build blockchain projects/ services in the future.  Blockchain tech is really intriguing to me and I believe has the potential to create more inclusive business models and systems that will include more actors via decentralization.  I believe this tech will continue the paradigm of digitalization as amazon, google, facebook, and other tech companies have found success with. I believe blockchain tech will have success in digitalizing property, energy, and financial services.  I would love to hear back from anybody else taking this course, please comment below!

I know i want to spend my career in tech, but at the moment I struggle exactly where I want to focus my career

you can think of ______ as _______ (to explain something)

technology is ubiquitous, everyone uses it,
I want to see what IT really looks like in a huge environment,\
i knew with hard work and persevearance, I could build a great career in IT, and so could you, it's never too late to go in a different direction,
guzzle my gumdrop,

IT support is about working in the service of others.  Always try to create a positive experience for the user.  

we all want to save more time and effort in the end,


//*************************************************************************************************** 
//  skillset required
//***************************************************************************************************
digital literacy skills,
problem solving,
creativity,
using failure as feedback,
highly motivated to learn and grow,
to be a self led learner--someone who finds key resources and reads up on the latest tech trends and solutions,
dedication to a lifetime of learning because technology is always changing, enjoys picking up new skills,
you have to like working with people,

3 important soft skills to have:
passion, in order to stay on top of everything in space you will need a lot of passion,
good researcher,
communication,

//*************************************************************************************************** 
//  random tips
//***************************************************************************************************
planning, or taking a minute out of your time to plan for success will lead to higher probability of finishing something, also getting into habit of making commitment and completing will lead to habit of finishing commitments more often and easier to do,
make sure you have strong fundamentals!,
diversity within it roles has exploded, leads to some really fun and good experiences,
when you're troubleshooting or solving a problem with a slow machine, it's usually some sort of hardware resource deficiency,
it's vital for you to know how to use a shell in an IT support role,
there are so many resources out there to help you with whatever you are working on/wanting to learn,
fixing problems and creating positive interactions with people, are two fundamental skills that can be applied to any situation, including IT,
look at interviews as opportunity to hone your interpersonal skills, learn more about the company, and make sure that job is good fit for you,
testing your boundaries and pushing yourself really will drive your success beyond what you think you could achieve,
focus on maximizing your potential, and everything will fall into place,
do IT as your starting ground to get a good foundation, it gives you opportunity to try a bunch of different things and then slowly start to move into more of a specialization if you'd like to,



*/
