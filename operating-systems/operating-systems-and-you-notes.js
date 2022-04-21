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
hotkey: keyboard shortcut,
wildcard: character that's used to help select files based on a certain pattern,


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
        copying file:    
            right click, copy, then paste,
            hotkey for copy is ctrl-c,
            hotkey for paste is ctrl-v,
            powershell: cp fileNameToCopy locationToPaste
        copying directory:
            cp 'directoryName' locationName -recurse -verbose: copies directory and all contents to location

    Linux: copying files and directories:
        copying file:
            cp fileNameToCopy locationToPaste
        copying directory:
            cp -r 'directoryName' locationName: copies directory and all contents to location
    
    Windows: moving and renaming files, directories :
        renaming in GUI: right click, click rename
        command line: 
            mv fileNameToMove newFileName  : (renaming file), moving file without changing directory that it's stored in
            mv fileNameToMove directoryName  :  moving file to directoryName

    Linux: moving and renaming files, directories :
        mv fileNameToMove newFileName  : (renaming file), moving file without changing directory that it's stored in
        mv fileNameToMove directoryName  :  moving file to directoryName

    Windows: removing files, directories :
        GUI: right click, click delete, go to recycle bin and delete file   
        command line:
            rm fileName: deletes file without moving to recycle bin, some files cannot be removed this way due to permissions that protect files
            rm directoryName: deletes directory and  all files within directory, prompts user if they wish to do this
            rm directoryName -recurse: deletes directory and  all files within directory
            
    Linux: removing files, directories :
        rm fileName: deletes file, some files cannot be removed this way due to permissions that protect files
        rm -r directoryName: deletes directory and  all files within directory


File and Text Manipulation:
    Windows: Display File Contents:
        GUI: double click file
        powershell: 
            cat pathName : dumps contents of file into shell
            more pathName: gets contents of file and pauses once it fills terminal window, enter key advances file by one line, space by one page, q quits
            cat pathName -Head 10 : displays first ten lines of file
            cat pathName -Tail 10: displays last ten lines of file

    Linux: Display File Contents:
        cat pathName : dumps contents of file into shell
        less pathName: less is similar to more for windows, but has more functionality, up and down keys, g moves to beginning of file, G moves to end of 
                    file, /word_search allows you to search for word_search in file, q allows you to quit
        head pathName: by default shows you the first ten lines of a file,
        tail pathName: by default shows you the last ten lines of a file,

    Windows: Modifying Text Files:
        recommends Notepad++ because it is great for basic editing and supports many file types
        start Notepad++ path: this CLI command opens up file in Notepad++
        mentions there is also an editor in CLI called Vim but recommends using Notepad++ over Vim

    Linux: Modifying Text Files:
        there are many popular text editors for Linux
        Nano: popular editor found on nearly every distribution
        nano path: opens up file in nano text editor, at bottom you see different options denoted with ^ carat symbol, to use commands type ctrl+letter

    Windows Powershell:
        so far the commands we have been using in Powershell are aliases for actual Powershell commands,
        Get-Alias aliasCommandName : shows what the actuall Powershell command is that gets executed when alias is run
            example is ls, ls is alias for Get-ChildItem
        cmd.exe commands: commands from old msDos days of Windows but can still be run due to backwards compatibility
            dir, dir points to Get-ChildItem
            cmd.exeCommandName /?: gets help with cmd.exe commands like Get-alias does for alias commands

    Windows: searching within files:
        crtl-f: search for a word within a file
        Windows search service: indexes files on your computer by looking through them on a schedule,
                                by default, often enabled for files in your home directory but not entire hard drive,
                                lets you find files based on their name, path, last time modified, size, or other details, but by default not contents of file
                                you can modify search to allow you to search for contents of file, find by typing indexing options in start menu, users -> advanced -> file types tab -> index properties and file contents, now you can search by content after reindexing is complete in windows search bar
        we can also search file content with Notepad++: open up Notepad++ and press ctrl-shift-f to open the find in files dialog
        
        cli:
            select-string stringToSearchFor path: select-string command allows you to find words or other strings of characters and files,
                                                you can search multiple files with regular expressions for path like wildcard
            
    Windows: searching within Directories:
        ls path -Recurse -Filter *.fileExtension: the -filter parameter will filter the results for file names that match a pattern

    Linux: searching within files:
        grep stringToSearchFor path: allows you to search file or files for string

    Windows: Input, Output, and the Pipeline:
        in powershell echo is alias for Write-Output
        every windows process and every powershell command can take input and can produce output via I/O streams, or input output streams,
        three different streams every windows process has:
            stdin: standard in
            stdout: standard out, 1
            stderr: standard error, 2
            there are also a couple more streams but these ^ are most important to know

        you can think of streams as literal streams, or rivers.  you provide input to process by adding things to the stdin stream which flows into process.
        when the process creates output, it adds data to the stdout stream, which flows out of the process.

        >, redirect operator : allows us to change where we want our standard output to go,
        >>, redirect operator: we can use to append information to a file without overwriting an existing file,
        |, pipe operator: allows us to send the output of one command to the input of another command,
            ex: cat words.txt | select-string st >st-words.txt

        $null: special variable that contains definition of nothing.  basically just a placeholder to redirect output if you do not wish to do anything 
                with output.
        Get-Help about_redirection: contains useful information to learn more about redirection

    Linux: Input, Output, and the Pipeline:
        three different streams for linux:
            stdin: standard in
            stdout: standard out, 1
            stderr: standard error, 2

        echo is used in same way as in windows ^, echo writes output,
        >, redirect operator : allows us to change where we want our standard output to go,
        >>, redirect operator: we can use to append information to a file without overwriting an existing file,
        <, standard in operator: allows us to get input from different stream than keyboard,
            cat < file-input.txt

        /dev/null: special file that contains definition of nothing.  basically just a placeholder to redirect output if you do not wish to do anything 
                with output.

        |, pipe operator: allows us to send the output of one command to the input of another command,
            ex: ls -la /etc | grep bluetooth

    Windows and Linux Advanced Navigation:
        regular expressions: used to help you do advanced pattern-based selection,
        there is so much more to cli, be sure to check out resources bookmarked!
    





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
