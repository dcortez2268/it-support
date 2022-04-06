/*
//*************************************************************************************************** 
//  Title: Operating Systems and You: Becoming a Power User
//  Author: Google, completed on courseera.com
//  Part 3 of 5
//***************************************************************************************************
//  SUPPLEMENTAL RESOURCES
//***************************************************************************************************
tcpip 5 layer model diagram: ./tcpip-5-layer-model.png

//*************************************************************************************************** 
//  WEEK 1: Course Introduction
//***************************************************************************************************
//  BASIC VOCAB
//***************************************************************************************************
The command line interpreter in Linux is called a SHELL, and the language that we'll use to interact with this shell is called BASH,
path: the location of file or directory, a path starts at the root directory of a drive and continues to the end of the path,
    absolute path: path that starts from the main directory,
    relative path: path from your current directory,
parameter: value that's associated with a Windows command,
The c: drive root folder is what we call a PARENT DIRECTORY and the contents inside are considered CHILD DIRECTORIES,
flag: in Linux, a flag is a way to specify additional options for a command, usually specify a flag by using a hyphen then flag option,
    you can see what options are available for flags by typing --help flag,
    flags in linux can be appended together and work exactly the same as if flags are listed separately,
tab completion: lets us use tab key to auto complete file names and directories,



Basic Commands:
    Lesson Overview and Practice Tips:
        it is much easier to understand and remember information if you practice and type out commands along with lesson,
        write down commands and keep for reference,


    List Directories in a GUI:
        in Windows file systems are assigned to drive letters which look like C:, or D:, or X:, etc,
        Subdirectories are separated by backslashes in Windows, and are separated by forward slashes in Linux,
        to get more information about a file you can view its properties,


    Windows: list directories in a CLI:
        popular cli for windows are: Command Prompt, or command.exe, and Powershell, or powershell.exe
        command prompt, command.exe:
        powershell, powershell.exe:
            supports most of command prompt commands and many more,
            many commands are aliases for other commands in other shells,
            these lessons implement powershell,

        ls pathName: lists directories and files at this path,
            get-help ls: text describing parameters of the ls command,
            get-help ls -full: description of each of the parameters and some examples of how to use command,
            ls -force pathname: will show directories and files at this path, including hidden files,

        some important Windows directories that are children of c:\:
            Program Files x86: contain most of the applications and other programs that are installed in Windows users,
            Users: contains user profile directories or home directories,
            Windows: this is where windows os is installed,
            programData: generally used to hold data for programs that are installed in Program Files, has a lot of different things,


    Linux: list directories in a CLI:
        path to root directory is denoted by /,
    
        ls pathName: lists directories and files at this path,
            ls -l pathName: lists directories and files at this path, in a format of long list which displays more information,
            ls -a pathName: lists directories and files at this path including hidden files, in a format of long list,

        man commandName: used to show us manual pages, or man pages that display information about commands,

        some important linux directories:
            /bin: stores our essential binaries or programs,
            /etc: stores essential system configuration files,
            /home: personal directory for users, holds data like documents, pictures, etc,
            /proc: stores information about currently running processes,
            /user: stores user installed software
            /var: stores system logs and basically any file that constantly changes


    Windows and Linux: changing directories in the cli:
        pwd, print working directory command: tells you which directory you're currently in,
        cd pathName: 
            command that changes directory to pathName,
            can be relative or absolute,
            .., ./, ~, .\, \


    Windows: make directories in the GUI and CLI:
        for gui: right click, add new, select folder,
        mkdir directoryName: creates new directory named directoryName in current directory,
            for a folder name with spaces we can surround name in quotes or ` escape character, ex 'directoryName' or directory` Name


    Linux: make directories in Bash:
        mkdir directoryName: creates new directory named directoryName in current directory,
            for a folder name with spaces we can surround name in quotes or \ escape character, ex 'directoryName' or directory\ Name


    Windows and Linux: command history:
        every time you enter a command, it gets saved into memory and added to a special file,
        history:
            command that lists all commands previously entered,
        up/down keys:
            lets you toggle your commands in history,
        ctrl+r: allows you to search through commands in history,
        clear: allows you to clear text from terminal


    Windows: copying files and directories:
        

    Linux: copying files and directories:
    Windows: moving and renaming files, directories :
    Linux: moving and renaming files, directories :
    Windows: removing files, directories :
    Linux: removing files, directories :
File and Text Manipulation:


//*************************************************************************************************** 
//  WEEK 2: The Network Layer
//***************************************************************************************************

Layer 3, the Network Layer:
    ip addresses belong to networks, not to the devices attached to those networks,



//*************************************************************************************************** 
//  WEEK 3: The Transport Layer and Application Layers
//***************************************************************************************************



//*************************************************************************************************** 
//  WEEK 4: Introduction to network services
//***************************************************************************************************



    
//*************************************************************************************************** 
//  WEEK 5: Introduction to connecting to internet
//***************************************************************************************************


        
        
//*************************************************************************************************** 
//  WEEK 6: Introduction to Troubleshooting and the future of networking
//***************************************************************************************************



//*************************************************************************************************** 
//  soft skills
//***************************************************************************************************


//*************************************************************************************************** 
//  skillset 
//***************************************************************************************************

//*************************************************************************************************** 
//  random 
//***************************************************************************************************

*/
