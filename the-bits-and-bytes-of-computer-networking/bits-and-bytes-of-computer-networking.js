/*
//*************************************************************************************************** 
//  Title: The Bits and Bytes of Computer Networking
//  Author: Google, completed on courseera.com
//  Part 2 of 5
//***************************************************************************************************
//  SUPPLEMENTAL RESOURCES
//***************************************************************************************************
tcpip 5 layer model diagram: ./tcpip-5-layer-model.png


//*************************************************************************************************** 
//  WEEK 1: Introduction to networking
//***************************************************************************************************
//  BASIC VOCAB
//***************************************************************************************************
protocol:  a defined set of standards that computers must follow in order to communicate properly,
computer networking: the full scope of how computers communicate with each other,
cables: connect different devices to each other, allowing data to be transmitted over them,
crosstalk: when an electrical pulse on one wire is accidentally detected on another wire,

Networking: involves ensuring that computers can hear each other, that they speak protocols other computers can understand, that they repeat messages not fully delived, and a couple of other things, just like how humans communicate

line coding (form of modulation): a way of varying the voltage of charge moving across copper cable, how we represent binary data with copper wires,

duplex communication: the concept that information can flow in both directions across cable,
    half-duplex: synchronous communication,
    full duplex: asynchronous communication,
simplex communication: the concept that information flows unidirectionally,
payload: actual data being transported, which is everything that isn't a header,
autonomous system: a collection of networks that all fall under the control of a single network operator,
port: a 16 bit number that's used to direct traffic to specific services running on a networked computer,
    1-1023:system ports, or "well-known ports"
    1024-49151: registered ports,
    49152-65535: private or ephemeral ports

ethernet protocol: defines how data is sent to nodes on same network or link





Two primary networking models : TCPIP five layer model, OSI model.
    How they work: the protocols at each layer carry the ones above them in order to get data from one place to the next.
    primary difference: the osi model abstracts layer 5 of tcp ip model, the applicaiton layer, into three layers total
    
TCP/IP 5 Layer Model (high overview):

    Layer 1 : Physical Layer:
        represents the physical devices that interconnect computers,
        specifications for networking cables and connectors that join devices together,
        specifications for how signals are sent over these connections,
    
    Layer 2 : Data Link Layer (or network interface/access layer):
        introduce our first protocols,
        defines a common way of interpreting signals, so network devices can communicate, is responsible for getting data across a single link
        most common protocol is known as Ethernet, and Wifi,
            
    Layer 3 : Network Layer, (or internet layer)
        allows different networks to communicate with each other through devices known as routers,
        implements IP protocol,
        repsonsible for getting data delivered across a collection of networks,  establishes connection from one node to another node at a time
    
    Layer 4 : Transport Layer
        sorts out which client and server programs receive data  (running on the nodes that have established connection from Network Layer) 
        implements  TCP (Transmission control) protocol  and UDP (User Datagram) protocol,
        main difference between TCP and UDP is that TCP provides mechanisms to ensure reliable delivery while UDP does not
    
    Layer 5 : Application Layer
        lots of different protocols running at this layer (application-specific),
    
Analogy given of the TCP IP Model:
    You can think of:
    the physical layer as the delivery truck and roads,
    the data link layer as the intersection getting cars through,
    the network layer and the directions to get from address a to address b,
    the transport layer as the delivery instructions for notifying you/ leaving at your house,
    the application layer as contents of package itself
    
Physical layer:
    two different types of cables: copper and fiber
    
    copper cables:
    most common,
    binary is respresented in copper cables by  different voltage ranges,
    cat5, cat5e, and cat6 cables (category 5 or category 6 cables) : most common forms of copper twisted pair cables, 
    cat5e wires reduces crosstalk and improves reliability of data transfers, cat6 reduces further
    
    fiber cables:
    contain individual optical fibers, which are tiny tubes made out of glass,
    binary is respresented by different beams of light,
    can transport data much faster and longer distances but are much more expensive and fragile,
    
    final steps of physical layer take place at endpoints of our network links.  Twisted pair network cables are terminated with a plug that takes the individual internal wires and exposes them.  Most common plug is known as RJ45, or Registered Jack 45. 
        has two leds: 
            Link LED: lights when a cable is properly connected to two devices that are powered on.
            activity LED: will flash when data is actively transmitted across the cable.
    

Hubs, switches, routers:
    hubs and switches: 
    hubs and switches are the primary devices used to connect computers on a single network, or LAN (local area network).  
    
    hub: 
    physical layer device that allows for connections from many computers at once, all the devices connected to a hub will have capability of talking to all other devices at the same time.  when they want to send to one computer they broadcast to all and it is computer's responsibility to ignore or accept communication.  causes many collision domains.
    collision domain: network segment where only one device can communicate at a time.  This happens when electrical pulses sent across cable interfere with each other.  They slow down hubs a lot and why hubs are not used today.
    
    switch: 
    connects many computers together so they can communicate via the layer two, data link layer.  Switches are able to tell who the intended recipient is by inspecting data and then sends the message to only that system.  eliminates collision domains and leads to higher throughput. 
    
    router: a device that knows how to forward data between independent networks,
    layer 3 device, the network layer,
    can inspect IP data to determine where to send things,
        Border Gateway Protocol, BGP : protocol that lets routers share data with each other to learn about the most optimal paths to forward traffic
    
    
client and servers:
    server: something that provides data to something requesting that data,
    client: thing receiving that data,
    
    use these vague definitions because most devices aren't purely a server or a client, 
    a node can have programs that can be servers and have other programs that are clients
    however in most network topographies, each node is primarily either a server or a client.  



LEFT OFF FORMATTING HERE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    
    Data Link Layer:
    most common option to being connected to networks are traditional cable networks although wifi is becoming more popular,
    primary purpose of this layer is to abstact what hardware is in use so other layers do not have to worry about it for implementation details, 
    
    ethernet is a fairly old technology that was standardized in 1983, as a protocol solved prolblem of collision detection by using a technique know as carrier sense multiple access with collision detection. known as CSMA/CD
    
    CSMA/CD: used to determine when the communication channels are clear, and when a device is free to transmit data,
    
    Ethernet uses mac addresses to ensure that the data it sends has both an address for the machine that sent the transmission, as well as the one the transmission was intended for
    
    Unicast, Multicast, and broadcast:
    unicast transmission: always meant for just one receiving address,sent to all but only actually received and processed by intended destination
    multicast transmission: similar to unicast but accepted or discared based on network interfaces,
    broadcast: sent to every single device on a LAN, uses broadcast address all Fs.  used so devices can learn more about each other.  
    
    Ethernet frame:  Data packets at the Ethernet level
    
    //*************************************************************************************************** 
    //  WEEK 2: The Network Layer
//***************************************************************************************************

Network Layer:
ip addresses belong to networks, not to the devices attached to those networks,

Dynamic Host Configuration Protocol, DHCP : assigns IP address automatically to new devices on a network,
Dynamic IP address: ip address assigned via DHCP protocol, usually reserved for clients,
static ip address : must be configured on a node manually, usually reserved for servers and network devices

IP datagram: a packet at the network layer

datagram header format (pretty long):

version field: indicates what version of ip address is being used,
header length field: declares how long entire header is,
service type field: specify details about quality of service, 
QOS technologies: allow routers to prioritize which ip datagrams are more important,
total length field: represents length of datagram it is attached to (payload)

identification field: multiple datagrams that split up data will have same identification number,
fragmentation: If the total amount of data that needs to be sent is larger than what can fit in a single datagram, the ip layer needs to split this data up into many individual packets,

flag field: used to indicate if a datagram is allowed to be fragmented, or to indicate that the datagram has already been fragmented,

fragmentation offset field: contains values used by receiving end to put them back together in correct 
order

TTL, time to live field: indicates how many router hops a datagram can traverse before it's thrown away
decrements number each time datagram hops to different router, prevents endless loops,

protocol field: contains data about what transport layer is being used,
header checksum field: a checksum of the contents of the entire datagram header
source ip address: source ip address,
destination ip address: destination ip address,
options field : sets special characteristics for datagrams primarily used for testing purposes,
padding field: series of zeros used to ensure header is correct=size

payloads are encapsulated across layers in tcpip model, see ./encapsulation-of-payloads-across-tcpip-layers.png for chart 

address class system: a way of defining how the global ZIP address space is split up
ip addresses can be split into two sections: network ID and host ID.  the address class system has mostly been replaced by CIDR, or classless inter-domain routing

class a : first octet is network id, last three octets are used for host id,
class b : first and second octet is network id, last two octets are used for host id,
class c : first three octets is network id, last octet are used for host id,
class d : used for multicasting,
class e : unassigned and only used for testing services,

chart of ip address class system at ./ip-address-classes.png

ARP, Address Resolution Protocol: used to discover the hardware address of a node with a certain ip address,
ARP table: list of IP addresses and the MAC addresses associated with them.  Almost all devices connected to network will retail a local arp table.  They generally expiere after a short amount of time to ensure changes in network are accounted for.  

Subnetting: the process of taking a large network and splitting it up into many individual and smaller subnetworks, or subnets.  Each subnet has its own gateway router.

gateway router: specifically serves as the entry and exit path to a certain network,

        subnet id: some bits that would normally comprise the host id are actually used for the subnet ID
        subnet masks: used to calculate subnet ids.  They are a way for a computer to use and operators to determine if an ip address exists on the same network.
        Part with all the ones tell us what we can ignore when computing host id, all 1s represents subnet id
        part with all the zeroes tell us what to keep when computing host id,
        a subnet can contain two less than the total number of host ids available, because zero is not used and 255 is reserved for broadcast address for subnet,
        
        definition of network:
        notation for writing ip address with submask would be 9.100,100,100/27, where 9.100.100.100 is ip address and /27 represents a subnet mask of 27 ones followed by 5 zeros because total size of subnet mask is 32 bits
        
        demarcation point: describes where one network or system ends and another one begins,
        CIDR, or classless inter-domain routing : modern, more flexible way of describing blocks of ip addresses.
    network id and subnet id are combined into one.
    
    Routing:
    
    
    Basic routing steps:
router recieves a packet of data on one of its network interfaces (it has to be connected to at least two),
router examines desination ip of this packet
looks up the destination network of this ip in its routing table,
router forwards that out through interface thats closest to destination

Routing Table:
has four columns:
    Destination Network: column that contains a row for each network that the router knows about, definition of network.
    next hop: this is the ip address of the next router that should receive data intended for the destination, or that there aren't any additional hops,
    total hops: keeps track of how far away destination currently is, that way when it receives updated info from neighboring routers it can compare current total hops to other paths of total hops, in order to optomize route
    interface: router has to know which of its interfaces it should forward traffic to
        
        two main categories of routing protocols: interior gateway protocols and exterior gateway protocols
        
        interior gateway protocols:
        used by routers to share information within a single autonomous system,
        link state routing protocols: more sophisticate approach to determining best path to a network,
        each router advertises the state of the link of each of its interfaces, meaning every router on the system knows every detail about every other router in the system,
        expensive memory cost to hold all the data and expensive cost for extra processing but much faster than distance vector protocols,
        distance-vector protocols: older standard, do not know much about total state, just their immediate neighbors,
        
        exterior gateway protocols:
        used to communicate data between routers representing the edges of an aoutonomous system,
        
        IANA (Internet Assigned Numbers Authority) : non-profit organization that helps manage things like IP address allocation.
        also responsible for ASN, or Autonomous System Number: numbers assigned to individual autonomous systems.
        
    IETF, Internet Engineering Task Force: open community responsible for maintinning the standards required for the Internet to continue to operate and own the RFCs
    RFC, Request For Comments: standard requirements that are responsible for keeping the internet running.  started as a way for academics to discuss how their computers might talk to each other.
    
    non routable address space: range of IPs set aside for use by anyone that cannot be routed to, they belong to no one and can be used by anyone
        allows for nodes on network to communicate with each other but no gateway router will attempt to forward traffic to this type of network

    //*************************************************************************************************** 
    //  WEEK 3: The Transport Layer and Application Layers
//***************************************************************************************************

Layer 4 : Transport Layer
sorts out which client and server programs receive data  (running on the nodes that have established connection from Network Layer) 
implements  TCP (Transmission control) protocol  and UDP (User Datagram) protocol,
main difference between TCP and UDP is that TCP provides mechanisms to ensure reliable delivery while UDP does not

Transport Layer is only layer with both multiplexing and demultiplexing, via ports.
multiplexing: nodes on the network have the ability to direct traffic toward many different receiving services.
demultiplexing: takes traffic thats all aimed at the same node and delivers it to the proper receiving service.

socket address or socket number: ip address denoted by a colon and port number, ie 10.1.1.100:80

TCP Segment: made up of a TCP header and a data section
tcp header: 
    source port: chosen from ephemeral ports, required to keep lots of outgoing connections separate, return address for server replying with data,
    destination port:
    sequence number: 32 bit number that's used to keep track of where in a sequence of TCP segments this one is expected to be (since data is often split up bc of ethernet frame size)
    acknowledgement number: number of the next epected segment,
    data offset field: a 4 bit number that communicates how long the tcp header for this segment is, so receiving network device knows where actual data payload begins,
    six tcp control flags: 
    tcp window: 16 bit number that specifies the range of sequence numbers that might be sent before an acknowledgement is required,
    checksum: 16 bit field, compared to checksum number in header to make sure that there isn't data lost or corrupted,
    urgent pointer field: used in conjunction with one of tcp control flags to point out particular segments as more important, rarely used,
    options field: rarely used,
    padding: ensures data payload sections begins at expected location

data section: payload area that encapsulates application layer messages

TCP establishes connections used to send long chains of segments of data in contrast to network, data link layer, and physical layer that send individual packet of data.

TCP implements 6 different TCP control flags for communication:
    URG: indicates that the segment is considered urgent and that the urgent pointer field has more info,
    ACK: acknowledged,  indicates the acknowledgement number field should be examined,
    PSH: push, indicates the transmitting device wants the receiving device to push currently buffered data to the application on the receiving end as soon as possible.  Used when you might be sending a very small amount of information that you need the listening program to respond to immediately.  tcp protocol implements buffer because by keeping some amount of data in buffer, tcp can deliver large chunks of data more efficiently. 
    RST: reset, means that one of the sides in a TCP connection hasn't been able to properly recover from a series of missing or malformed segments.  Basically just saying to start communication process from beginning.
    SYN: synchronize, used when first establishing a TCP connection and make sure the receiving end knows to examine the sequence number field.  
    FIN: Finish, indicates the transmitting computer doesn't have any more data to send and the connection can be closed.  

3 way handshake:
    1. computer a sends tcp segment with SYN flag set. This is computer A of saying... "Let's establish a connection and look at my sequence number field, so we know where this conversation starts."
    2. computer b sends tcp segment with SYN flag and ACK flag set to indicate, "sure, let's establish a connection and I acknowledger your sequence number."
    3.  Computer A responds again with just ACK flag saying, " I acknowledge your acknowledgement.  Let's start sending data."

handshake: a way for two devices to ensure that they're speaking the same protocol and will be able to understand each other.

4 way handshake:
    1 computer A closing connection sends FIN flag.  
    2. computer B acknowledges with ACK flag.  Sends FIN flag as well to close connection.
    3.  computer A sends ACK flag.

process of TCP communication:
    1. 3 way handshake.
    2. TCP connection operating in full duplex.  Each segment sent in either direction should be responded to by TCP segment with the ACK field set so the other side always knows what has been received.  
    3. 4 way handshake.


socket: the instantiation of an end point in a potential TCP connection,
instantiation: the actual implementation of something defined elsewhere. 
TCP sockets require actual programs to instantiate them whereas a port is more of a virtual description

TCP socket states:
    You can send traffic to any port you want, but your're only going to get a response if a program has opened a socket on that port.  

    There are many TCP socket states.  some common ones are:
    
    LISTEN: means a tcp socket is ready and listening for incoming connections,
    SYN_SENT: a synchronization request has been sent, but the connection hasn't established yet,
    SYN_RECEIVED: socket previously in a listener state, now has received a synchronization request and sent a SYN_ACK back, and has not received a final ACK from client yet,
    ESTABLISHED: TCP connection is in working order and both sides are free to send each other data.
    FIN_WAIT: a FIN has been sent, but corresponding ACK from other end hasn't been received yet,
    CLOSE_WAIT: connection has been closed at the tcp layer, but that the application that opened the socket hasn't been released its hold on the socket yet,
    CLOSED: the connection has been fully terminated and that no further communication is possible,

    These are the universal socket states at the TCP layer, but the implementation details like socket states and their names vary from operating system to operating system. When troubleshooting, check the exact socket state definitions for system you are working with.   

connection oriented protocol: establishes a connection, and uses this to ensure that all data has properly transmitted.  A connection at the transport layer implies that every segment of data sent is acknowledged.  Very important to have because there are a lot of different things that could go wrong when sending data on Internet.  

connectionless protocols: protocols that do not rely on connections.  Instead, you just set a destination port and send the packet, and there are no acknowledgements.  UDP is the most common.  Benefit is getting rid of overhead so you will have more resources for actual data transfer.  useful for messages that aren't super important.    

firewall: device that blocks traffic that meets certain criteria
    can be used at different layers but most commonly used at the transportation layer,
    general configuration that enables them to block traffic to certain ports while allowing traffic to other ports,
    firewalls are sometimes independent network device, but its better to think of them as a program that can run anywhere becuase firewalls can be run on different devices, or on individual hosts because all major modern os have firewall functionality built in

The application layer:
    implements so many different protocols,
    protocols are standardized across application types, for example web clients and servers use HTTP and use same protocol specifications

OSI: open systems Interconnection, popular network layer model that has seven layers, and introduces two additional layers between our transport layer and application layer to the TCP IP 5 layer model
    diagram at ./osi-model.png,
    session layer:  fifth layer, part of os that is responsible for things like facilitating communication between actual applications and the transport layer,
    presentation layer: sixth layer, part of os responsible for making sure that the unencapsulated application layer data is actually able to be understood by the application in question, might handle encryption or compression of data,

    the reason these layers are both put into application layer in five layer model is because there is not any encapsulation going on

This program notes that the five layer model is the most useful when it comes to day to day business of understanding networking, however the osi 7 layer model is also prevalent.

All the layers working in unison:
    exercise 





























    //*************************************************************************************************** 
    //  soft skills
    //***************************************************************************************************
    half of people at google do not have traditional it backgrounds.  He breaks success down into being able to connect with people, being able to break a problem down into components that are easy to solve.  Learning technicals is pretty easy.  
    
    //*************************************************************************************************** 
//  skillset 
//***************************************************************************************************
Obtaining my bachelors in computer science gave me foundational knowledge that makes it easier to pick up higher level concepts and processes.

Once you complete the Google IT Support program, we will send you more information on how to get your CompTIA A+ certification, including a discount code to take the exam at 20% off. Stay tuned!  
The benefits of having both the Google IT Support Certificate and CompTIA A+ Certification under your belt include:
Getting your foot in the door while applying for IT roles - 96% of HR managers use IT certifications as screening criteria for recruitment. 
Future-proofing your career and advancing in your role - Demonstrating continuing value to their employers, CompTIA certified IT professionals are promoted almost twice as often as non certified IT professionals. 

//*************************************************************************************************** 
//  random 
//***************************************************************************************************
an It support person who truly understands networking at a fundamental level is able to perform every aspect of their job so much more successfully,
whwnever something is stumping you or you feel stuck at a certain aspect, rememeber there's always someone else going through the same exact thing! having a network of people that motivates you is so fundamental!  don't be afraid to ask for help.  also there are always people who know more than you that you can learn from!
the most popular web servers are microsoft IIS, Apache, and nginx,
goal of doing all this is to do what you love, and also to have more time to spend with the people I love


*/