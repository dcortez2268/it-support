/*
//*************************************************************************************************** 
//  Title: The Bits and Bytes of Computer Networking
//  Author: Google, completed on courseera.com
//  Part 2 of 5
//***************************************************************************************************
//  SUPPLEMENTAL RESOURCES
//***************************************************************************************************
tcpip 5 layer model diagram: ./tcpip-5-layer-model.png
payloads are encapsulated across layers in tcpip model, see ./encapsulation-of-payloads-across-tcpip-layers.png for chart 
osi model diagram: ./osi-model.png,
//*************************************************************************************************** 
//  WEEK 1: Introduction to networking
//***************************************************************************************************
//  BASIC VOCAB
//***************************************************************************************************
protocol:  a defined set of standards that computers must follow in order to communicate properly,
computer networking: the full scope of how computers communicate with each other,
cables: connect different devices to each other, allowing data to be transmitted over them,
crosstalk: when an electrical pulse on one wire is accidentally detected on another wire,
Networking: involves ensuring that computers can hear each other, that they speak protocols other computers can understand, that they repeat messages not
             fully delived, and a couple of other things, just like how humans communicate
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
ethernet protocol: defines how data is sent to nodes on same network or link,
multicast: a way of addressing groups of hosts all at once,
link-local unicast addresses: allow for local network segment communications and are configured based upon a host's MAC address,


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
   
        
Layer 1, the Physical layer:
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
        are layer 2 devices,
    
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
    

Layer 2, the Data Link Layer:
    most common option to being connected to networks are traditional cable networks although wifi is becoming more popular,
    primary purpose of this layer is to abstact what hardware is in use so other layers do not have to worry about it for implementation details, 
    
    ethernet is a fairly old technology that was standardized in 1983, as a protocol solved prolblem of collision detection by using a technique know as carrier sense multiple access with collision detection. known as CSMA/CD
    
    CSMA/CD: used to determine when the communication channels are clear, and when a device is free to transmit data,
    
    Ethernet uses mac addresses to ensure that the data it sends has both an address for the machine that sent the transmission, as well as the one the transmission was intended for
    
    Unicast, Multicast, and broadcast:
        unicast transmission: always meant for just one receiving address,sent to all but only actually received and processed by intended destination
        multicast transmission: similar to unicast but accepted or discarded based on network interfaces,
        broadcast: sent to every single device on a LAN, uses broadcast address all Fs.  used so devices can learn more about each other.  
    
    Ethernet frame:  Data packets at the Ethernet level
    
//*************************************************************************************************** 
//  WEEK 2: The Network Layer
//***************************************************************************************************

Layer 3, the Network Layer:
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
ARP table: list of IP addresses and the MAC addresses associated with them.  Almost all devices connected to network will retail a local arp table.  They 
            generally expiere after a short amount of time to ensure changes in network are accounted for.  

Subnetting: the process of taking a large network and splitting it up into many individual and smaller subnetworks, or subnets.  Each subnet has its own 
            gateway router.

            gateway router: specifically serves as the entry and exit path to a certain network,

            subnet id: some bits that would normally comprise the host id are actually used for the subnet ID
            subnet masks: used to calculate subnet ids.  They are a way for a computer to use and operators to determine if an ip address exists on the same network.
            Part with all the ones tell us what we can ignore when computing host id, all 1s represents subnet id
            part with all the zeroes tell us what to keep when computing host id,
            a subnet can contain two less than the total number of host ids available, because zero is not used and 255 is reserved for broadcast address for subnet,

            basic takeaway is that subnetting allows flexibility of ip addresses, and all hosts on same network will have matching subnet id, id can be identified by 
        
        notation for writing ip address with submask would be 9.100.100.100/27, where 9.100.100.100 is ip address and /27 represents a subnet mask of 27 ones followed by 5 zeros because total size of subnet mask is 32 bits
        
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
    RFC, Request For Comments: standard requirements that are responsible for keeping the internet running.  started as a way for academics to discuss 
                         how their computers might talk to each other.
    
    non routable address space: range of IPs set aside for use by anyone that cannot be routed to, they belong to no one and can be used by anyone
                                allows for nodes on network to communicate with each other but no gateway router will attempt to forward traffic to this type of network

//*************************************************************************************************** 
//  WEEK 3: The Transport Layer and Application Layers
//***************************************************************************************************

Layer 4, the Transport Layer:
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
    2 and 3. computer B acknowledges with ACK flag.  Sends FIN flag as well to close connection.
    4.  computer A sends ACK flag.

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

connection oriented protocol: establishes a connection, and uses this to ensure that all data has properly transmitted.  A connection at the transport 
            layer implies that every segment of data sent is acknowledged.  Very important to have because there are a lot of different things that could go wrong when sending data on Internet.  

connectionless protocols: protocols that do not rely on connections.  Instead, you just set a destination port and send the packet, and there are no 
            acknowledgements.  UDP is the most common.  Benefit is getting rid of overhead so you will have more resources for actual data transfer.  useful for messages that aren't super important.    

firewall: device that blocks traffic that meets certain criteria
        can be used at different layers but most commonly used at the transportation layer,
        general configuration that enables them to block traffic to certain ports while allowing traffic to other ports,

firewalls are sometimes independent network device, but its better to think of them as a program that can run anywhere becuase firewalls can be run on different devices, or on individual hosts because all major modern os have firewall functionality built in


Layer 5, the application layer:
    The application layer's protocols:
        implements so many different protocols,
        protocols are standardized across application types, for example web clients and servers use HTTP and use same protocol specifications

OSI, open systems Interconnection model: popular network layer model that has seven layers, and introduces two additional layers between our transport 
                                    layer and application layer to the TCP IP 5 layer model
                                    diagram at ./osi-model.png,
    session layer:  fifth layer, part of os that is responsible for things like facilitating communication between actual applications and the transport layer,
    presentation layer: sixth layer, part of os responsible for making sure that the unencapsulated application layer data is actually able to be understood by the application in question, might handle encryption or compression of data,

    the reason these layers are both put into application layer in five layer model is because there is not any encapsulation going on

    This program notes that the five layer model is the most useful when it comes to day to day business of understanding networking, however the osi 7 layer model is also prevalent.

All the layers working in unison:
    exercise takeaways were that when computer is initially ready to send packet, it starts constructing from top down, (layer 5 first then down to layer 1), gets sent to router and operates between layer 3 and 2 until it gets to final destination, then it goes back up from layer 3 to layer 5

    all this is done just for once syn flag, has to repeat for all of the other flags and subsequent data transmission! wow

//*************************************************************************************************** 
//  WEEK 4: Introduction to network services
//***************************************************************************************************

purpose of networking: to ensure networks services can be available to answer requests for the data from clients

four things that need to be configured at computer or node on a network:
    ip address, subnet mask, gateway, dns name server
    
domain name: string of letters that make up a web address
    
DNS, Domain Name System: protocol that maps domain name to IP address: 
    dns allows distributed servers to serve different IP for same exact domain name in order to tranfer data faster since distributed server will be closer to client, for example, someone in us searching netflix.com would resolve to a different ip address than someone in middle east searching netflix.com in order for both users to get data at fastest speed possible,
    
    // great example of application layer service that uses UDP for the transport layer instead of TCP, typically done this way, but sometimes uses DNS over TCP when size of DNS lookup reponse is too big for a single UDP datagram?
    
    dns operates with a set of defined resource Record Types: (data types of dns protocols)
    there are a lot of different ones and some have very specialized purposes, some main ones below: 
        A record:
            used to point a certain domain name at a certain IPv4 IP address, a single domain name can have multiple A records, dns round robin technique implements authorative name server cycling through Ips and knowing about others just in case connection fails,
        Quad A record:
            similiar to A record but returns in IPv6 instead of an IPv4 address,
        CNAME record, (canonical name record):
            used to redirect traffic from one domain to another,
        MX record, (mail exchange record):
            used in order to ensure that email gets delivered to a company's mail server, used only with mail services
        SRV record, (service record):
            used to define the location of various specific services, can be used to return specifics about many different service types
        TXT record, (text) :
            used to convey additional data intended for other computers to process, has a field that's entirely free form, often used to communicate configuration preferences about network services that you've entrusted other organizations to handle for your domain, 
            NS or SOA records:
                used to define authority information about DNS zones
            
Name Resolution System: 
    The process of using DNS to map from domain name to IP address,
    DNS local name servers have to be specifically configured at a node on a network, 
    
    5 types of name servers :
        caching name servers, recursive name servers, root name servers, tld name servers, authoritative name servers
            
        Some servers are both caching and recursive: generally provided by ISP or local network, usually both are together in same server bc they work together
        
        caching servers: purpose is to store domain name lookups for a certain amount of time
            TTL, Time to live: a value in seconds that can be configured by domain name owner for how long a name server is allowed to cache an entry before it should discard it and perform a full resolution again
        some devices have their own temporary dns cache as well that way they do not have to send request to caching server
                    
        recursive name servers: ones that perform full DNS resolution requests,
            steps for a lookup:
                contact a root name server: they are distributed across the globe via anycast: a technique that's used to route traffic to different destinations depending on factors like location, congestion, or link health, they direct traffic to correct TLD name server,
                
                TLD name server, top level domain: the last part of any domain name, represents top of the higharchical dns name resolution system, 
                                                    references which authoritative name server to contact
                
                Authoritative name servers: responsible for the last two parts of any domain name which is the resolution at which a 
                single organization may be responsible for DNS lookups, likely to be controlled by the organization itself that runs the site which finally provides the actual ip of the server
                
                also responsible for a specific DNS Zone, 
                Note ** all are Authoritative name servers but root name and TLD have specific use cases of DNS Zone 
                
Breakdown of a Domain Name:
    any given domain name has three primary parts, separated by period
        subdomain: referred to as a host name if it's been assigned to only one host, first part of domain,
        Domain: second part of domain name, used to seperate where control moves from a TLD name server to an authoritative name server,
                must end in one of the predefined TLDs,
        TLD, Top Level Domain : the last part of a domain name, there are only a certain restricted number of defined TLDs available,
    
    Fully Qualified Domain Name, FQDN : when you combine all three parts of domain togehter, then you have a FQDN
    
    DNS can technically support up to 127 levels of domain in total for a single fully qualified domain name, because you can have 
    many subdomains, can contain up to 255 characters

DNS Zones : 
    allow for easier control over multiple levels of a domain,
    as number of resource codes in a single domain increases, it becomes harder to manage, so can be configured much easier with multiple DNS Zones,
    ex: la.largecompany.com, fs.largecompany.com, pa.largecompany.com, each have their own DNS Zone,
    
    each dns zone contains: 
        zone files : simple configuration files that declare all resource records for a particular zone, 
        SOA record, Start of authority resource record declaration: declares zone authorative server name,
        NS Records: indicate other name servers that may also be responsible for this zone,
        reverse lookup zone files: these let DNS resolvers ask for an IP and get the FqDN associated with it returned, resolves IP to a name
        
DHCP, Dynamic Host Configuration Protocol:
    application layer protocol that automates the configuration process of hosts on a network (operates at application layer but is configuring network layer through process mentioned below),
    very important to know as IP specialist,
    maintains a list of every node on the network and its corresponding ip, assigns ips via:
            dynamic allocation: having list of available ips and assigning these to devices when they need one, 
            
            automatic allocation: range of ip addresses is set aside for assignment purposes and assigns the same ip to each machine each time if possible, 
            
            fixed allocation: requires a manually specified list of MAC address and their corresponding IPs, when a computer requests an IP, DHCP server looks for its MAc address in a table and assignes the IP that corresponds, or refuses.
            
            DHCP can be used to: 
                used to assign things like IP address, primary gateway, and to assign things like NTP servers
    
    DHCP discovery: the process by which a client configured to use DHCP attempts to get network configuration information
        has four steps:
            server discovery step: all messages are broadcasted and client recognizes messages for itself because of MAC address,
                DHCP client sends a DHCPDISCOVER message out onto the network, message that is broadcasted from port 67 to source port 68,
                server responds with DHCPPOFFER message,
                DHCP client responds with DHCPREQUEST message, "yes, I would like to have an ip that you offered me",
                server responds with DHCPACK message,
            
            now the network stack on the client computer can now use the configuration information, called the DHCP lease, presented to it by the DHCP server to set up its own network layer configuration

            whenever cleint disconnects from network, it is done with IP  and it can release its DHCP lease to the DHCP server, which returns the ip address to the pool of available ips

NAT, Network Address Translation: 
    takes one IP address and translates it into another, 
    technique instead of a defined standard so implementation details can differ but the concepts of what it accomplishes are pretty constant,

    implements security safeguards:
        allows a gateway, usually a router or firewall, to rewrite the source IP of an outgoing IP datagram while retaining the original IP in order to rewrite it into the response, this is how to implement ip madsquerading
            
    ip masquerading: hiding IP of one computer from another
            
    one to many NAT: when all computers have their outbound traffic traslated via NAT to single IP, router performs ip masquarading for all computers
            
    implements workaround for more IPv4 addresses until we can implement all IPv6 addresses:
        non routable address space: consists of several different IP ranges that anyone can use, internet routers won't forward traffic to it, 
        the network uses one IP for router and with NAT forwards traffic to computers implementing non routable address space ips
        
NAT and the Transport Layer:
    When a router on a one to many NAT network is  receiving incoming messages, it must redirect traffic back to corresponding computer.  Accomplishes this task via: 
        port preservation: 
                technique where the source port chosen by a client, is same port used by the router,
                ends up with router knowing which corresponding computer is with message because same source port from original message sent by client,
                whenever source port collision, the router will assign to different unused port,
        port forwarding:
            technique where a specific destination ports can be configured to always be delivered to specific nodes ( so client doesn't have to know ip of server, just ip of router). 
            this technique allows for ip masquerading because response traffic source ip is rewritten by router w router ip,
            simplifies how external users might interact with lots of services all run by the same organization,


VPNS, virtual private networks :
        technology that use encrypted tunnels to allow for a remote computer or network to act as if it's connected to a network that it's not actually physically connected to,
        is a tunneling protocol: protocol that provisions access to something not locally available
        
        vpn client establishes vpn tunnel that assigns your computer an ip that matches address space of network you connect to, 
        allows you to send data out of this virtual interface and access the corresponding network,
        most require two factor authentication,
        
        have a lot of different flavors that accomplish many different things,
        most work by using the payload section of the transport layer to carry an encrypted payload that actually contains an entire second set of packets: the network, transport, and application layers intended to traverse the remote network.
        
        two factor authentication: a technique where more than just a username and password are required to authenticate

Proxy Services: a server that acts on behalf of a client in order to access another service, doesn't refer to any specific implementation,
    sit between clients and other servers to provide: anonymity, security, content filtering, increased performance, and more.
    
    ex is a gateway router because gateway router meets definition,
    
web proxies:
    proxies built for web traffic,
    some purposes include:
        increase performance: cache data, (pretty old and not really used today),
        prevent someone from accessing sites, proxy denies or grants request to clients based on configs,
    
    reverse proxy:
        a service that might appear to be a single server to external clients, but actually represents many servers living behind it
        popular websites implement with single server as entry point to requests and distributes these requests to different servers, form of load balancing,
    
        popular websites implement to deal with decryption because reverse proxies have special hardware.  leaves web servers to be free to just serve content.
    
//*************************************************************************************************** 
//  WEEK 5: Introduction to connecting to internet
//***************************************************************************************************

Plain Old Telephone Service, POTS: the public switched telephone network,
USENET: system developed by two duke grad students in 1970 to implement transmitting data using the POTS system,

dial up connection: uses POTS for data transfer, and gets its name because the connection is established by actually dialing a phone number,

modem, modulator demodulator: take data that computers can understand and turn them into audible wavelengths that can be transmitted over pots, used 
                            to transfer data over a dial up connection,

Broadband:
    any connectivity technology that isn't dial up internet,
    broadband internet is almost always much faster than even the fastest dial up connections,
    are always on because essentially links that are always present,

    broadband was technology that made it viable for business and home users to use the internet for commercial purposes,
    business wasn't scalable on Internet before broadband,
    even loading one image before broadband could take up to 20 minutes to render,

    T carrier technologies: 1990s popular technology that became common transmission systems to transfer data much faster than any dial up connection could handle,
    still in use today but usually have been replaced by cable broadband or fiber connections that are now way more commmon, 

    DSL, Digital subscriber Line:   established connection over phone line for data transfer, phone companies realized they could transmit phone calls 
                                at a frequency and other data at other frequency at same time ,
        DSLAMS: modems for DSL, connection isn't torn down until DSLAM is powered off,
            lots of different variations or flavors but only slightly vary, if you need to know specifics best to contact the ISP that provides it,

        two most common types are:
        
            ADSL, Asymmetric Digital Subscriber Line: connections feature different speeds for outbound and incoming data, (faster downloads, slower uploads) good use case is for home users because all get similar experience with lower cost,
        
            SDSL, Symmetrical Digital Subscriber Line: uploads and download speeds are the same, used to be used in primarily just business 
            enterprises but is now most popular among home users and businesses too
            HDSL, High bit rate Digital subscriber line: further development in sdsl tech that provision speeds above 1.544 megabits per second,
            
Cable broadband: 
    cable companies realized they could also send data at different frequency than tv viewing,
    
    known as a shared bandwidth technology:
        many users share a certain amount of bandwidth until the transmissions reach the ISP's core network,
    
    usually managed by a cable modem: devicew that sits at the edge of a consumer's network and connects it to the cable modem termination system, or CMTS: 
        connects lots of different cable connections to an ISP's core network

Fiber Connections:
    use light for data transmission instead of electrical currents,
    allows for transmissions to travel much further without degradation of the signal,
    much more expensive than copper cables,
    traditionally only used by ISPS and their core networks but changing and more popular now to use fiber to deliver data closer to end user,

    FTTX, "fiber to the x": 
        denotes distance to x, which can be a variety of things,
        FTTN: fiber to the neighborhood: fiber technologies are used to deliver data to a single physical cabinet that serves a group of people,
        FTTB: fiber to the business, basement: fiber technologies are used to deliver data to an individual building,
        FTTH: fiber to the home: fiber technologies are run to each individual residence in a neighborhood or apartment building,
        FTTP: fiber to the premises: can refer to FTTH or FTTB,
        
    instead of a modem the demarcation point for fiber technologies is known as Optical Network Terminator, ONT:
            converts data from protocols the fiber network can understand, to data that more traditional, twisted pair copper networks can understand,
        


WANS, Wide area network technologies:
    wide area network, acts like a single network, but spans across multiple physical locations,
    good for transferring large amounts of data across lots of sites,
    usually require that you contract a link across the Internet with your ISP, (to mimic that all computers are in same physical location)
    local loop:
        the area between each demarcation point and the ISP's actual core network
    
Point to point VPNs:
    popular alternative to WAN technologies,
    since cloud technologies allow companies to outsource services and resources, sometimes a WAN technology is unneccasary but there is still need for different sites to still be able to communicate with each other, so companies can use point to point VPNs instead,
    
    establishes a VPN tunnel between two sites, a lot like VPN traditional setup but users do not need to configure and configurations are handled by network devices



Wireless networking:
    a way to network without wires, operates over radio waves
    
    wireless access point: a device that bridges the wireless and wired portions of a network, 
        a single wireless network will have many access points,
        wireless access points are important to be defined so a wireless device can talk to access point as well as receive incoming transmission by correct access point,
        
    IEEE 802.11 standards: set of specifications that make up the set of wireless technologies, or Wifi (wireless network device),
        generally use same protocol, but might operate at different frequency bands (most commonly 2.4 and 5 gHz),
        most common 802.11 standards are 8020.11b, 802.11a, 802.11n, and 802.11ac,
        you can think of 802.11 protocols as defining how we operate at both the physical and data link layers,
        
        802.11 data frame fields:
            frame control: 16 bits long and contains a number of subfields that are used to describe how the frame itself should be processed, ex is 
            version of 802.11 used,
            duration/id: how long total frame is, so receiver knows how long it should expect to have to listen to transmission,
            (four address fields so we know which wireless access point should be processing frame)
            address 1: source address field, represents the mac adress of the access point that should receive the frame, can be same as address 4,
            address 2: intended destination of network, can be same as address 3, 
            address 3: receiving address, mac address of the access point that should receive the frame, can be same as address 2,
            sequence control: 16 bits, contains a sequence number used to keep track of order of frames,
            address 4: transmitter address, mac address of whatever has just transmitted the frame, can be same as address 1,
                data payload: has data of all the protocols further up the stack,
                fcs, frame check sequence field: contains a checksum used for a cyclical redundancy check, just like how ethernet does it,
            
        takeaways:
            most common 802.11 protocols all operate with same basic data link protocol but how they operate at physical level varies,
            networks that operate on 5Ghz band are almost always faster, but have less of range,
            networks that operate on 2.4Ghz band are more susceptible to interference, but usually cover more area
            
            
    Wireless network configurations:
            
        ad hoc networks: where all nodes speak directly to each other,
        do not rely on much supporting network infrastructure   
        
        wireless LANS, or WLANS: one or more access points act as a bridge between a wireless and a wired network,
            most common type of wireless network you'll run into the business world,
            wired LAN operates as a normal LAN, and contains the outbound internet link,
            wireless devices communicate with access points who forward traffic along to the gateway router, where everything proceeds like normal,
        
        mesh networks: hybrid between ad hoc networks and WLANS,
            lots of devices communicate with each other wirelessly forming a mesh,
            most mesh networks node connections are made up of only wireless access points and will still be connected to a wired network, allows you to deploy more access points to mesh without having to run a cable to each of them,
            drastically increases the performance and range of a wirelesss network
            
    Wireless channels:
        individual, smaller sections of the overall frequency band used by a wireless network,
        helP address collision domains,
        works like a wireless switch bc wireless networking does not have physical interfaces for a wireless device to connect to, like switches have,
            
        Example...
        2.4 Ghz networking band:
            operate on roughly the band from 2.4 Ghz to 2.5 Ghz,
            each channel in between has different width,
        
            since frequencies are not precise, each channel on band has different widths,
            overlapping channels can lead to collision domains if they are congested but not all channels overlap due to different widths,
            most wireless networking equipment is built to auto sense what channels are most congested, 
        
        understanding this concept can help troubleshoot bad wireless connectivity problems or slowdowns in network:
            in order to avoid collision domains whenever you can, you want to make sure your own access points and those of neighboring businesses overlap channels as little as possible
            
    Wireless security:
        number of bits in an encryption key corresponds to how secure it is,
            
        WEP, wired equivalent privacy:
            encryption technology that provides a very low level of privacy,
            should be seen as being as safe as sending unencrypted data over a wired connection (not very secure),
            40 bits encryption key (can be cracked in just a few mins),
        
        WPA, Wifi Protected access:
            encryption technology that replaced WEP,
            uses a 128 bit key,
            the most common encryption algorithm for wireless networks is WPA2, 256 bit key,
        
        MAC filtering:
            another common way to help secure wireless networks,
            access points are configured to only allow for connections from a specific set of MAC addresses belonging to devices you can trust

    Cellular Networking or mobile networking:
        most common way of connecting,
        have a lot in common with the 802.11 networks at a high level,
        specific frequency bands are specifically reserved for cellular transmissions, 
        can travel over longer distances than other networks,

        built around the concept of cells that are each assigned a specific frequency band for use:
            neighboring cells are set up to use bands that don't overlap,
            cell towers can be though of like access points, just with a much larger range,
        
    Mobile device networks:
        bluetooth: most common short range wireless network,
        pairing: connecting a wireless peripheral to a mobile device,
        
        implement wifi, bluetooth, and one or several IOT protocols to connect with Internet and other devices,
        will try to connect to Internet using most reliable and lease expensive connection available:
        many mobile os's understand the concept of metered connections,
        
        connect to peripherals via short range networks,
        
        
//*************************************************************************************************** 
//  WEEK 6: Introduction to Troubleshooting and the future of networking
//***************************************************************************************************

error detection: the ability for a protocol or program to determine that something went wrong,
error recovery: the ability for a protocol or program to attem to fix an error,

ICMP, Internet Control Message Protocol: 
    used mainly by a router or remote host to comunicate why a transmission has failed back to the origin of the transmission

    fields of packet:
        type field: 8 bits long and specifies what type of message is being delivered, ex time exceeded, destination unreachable,
        code field: 8 bits long and indicates a more specific reason for error than just type,
        checksum: 16 bit field.
        rest of header: 32 bit field, optionally used by some of the specific types and codes to send more data,
        data payload: 
            exists entirely so that the recipient of the message knows which of their transmissions caused the error being reported,
            contains the entire ip header, and first 8 bytes of the data payload section of the offending packet, 

    primarily used so networked computers can deliver these messages automatically,

    Ping: networking tool that lets you send a special type of ICMP message called an ECHO REQUEST,
        essentially asks a destination, "hey are you there?", if destination is able to communicate will send back an ICMP echo reply message type,
        can be used on command line,
        all os support ping

Traceroute:
    utility that lets you discover the path between two nodes, and gives you information about each hop along the way,
    does this by manipulating TTL fields of the packets it sends,
    all os support traceroute,

    mtr for Linux/MacOs and pathping for windows are similar to traceroute but different bc they provide long traceroutes to better see how things change over a period of time,

Testing Port connectivity:
    tools for testing at transport layer are:
        Netcat on linux and MacOs,
        Test-NetConnection on windows


DNS:
    an ISP almost always gives you access to a recursive name server as part of the service it provides, 
    most businesses also run their own DNS servers to resolve names of internal hosts, 
    businesses also implement DNS as a service provider,
    always make sure name server is run by a reputable company because hijacking outbound dns requests is a way for attackers to direct you towards malicious sites

    resolution tools:
        nslookup: output displays what server was used to perform the request and the resolution result, 
            most popular DNS tool and is available on all three os,
            includes interactive mode that allows you to make lots of requests in a row and perform configuartions,
            returns A records by default,

    public DNS servers: name servers specifically set up so that anyone can use them for free,
        handy technique for troubleshooting any kind of name resolution problems you might be experiencing,
        the IP addresses for level 3 public DNS servers are 4.2.2.1 through 4.2.2.6,

        Google also has punlic name servers that are documented and available to be used by anyone,

    DNS registration and expiration:
        registrar: organization responsible for assigning individual domain names to other organizations or individuals,
        domain names are unique for internet system to work,
        to create a domain name: register with registrar, pay fee, and get length of time your domain name will be active,

    hosts files:
        original way that numbered network addresses were corrleated with words,
        flat file that conatins, on each line, a network address followed by the host name it maps to,
        aren't used much anymore but still used today to hold loopback addresses and can be helpful for some troubleshooting purposes because they let you force a computer to map a certain domain name to a specific ip, 

        loopback address: always points to itself, a way of sending network traffic to yourself


Cloud:
    What is the cloud?:
        cloud computing: a technological approach where computing resources are provisioned in a shareable way, so that lots of users get what they
                        need, and when they need it, in a more efficient way
                        basically a huge cluster of interconnected machines that can all function as hosts for lots of virtual guests,
                        allows you to leverage lots of existing services and servers without having to buy and configure your own,

        public cloud: a large cluster of machines run by another company,
        private cloud: used by a single large corporation and generally physically hosted on its own premises,
        hybrid cloud: situations where companies run their most sensitive data on a private cloud while entrusting less sensitive data to a public cloud

        hardware visualization: allows the copcept of a physical machine and a logical machine to be abstracted away from each other,
                                a single physical machine called a host can run many individual virtual instances called guests,
                                employ a hypervisor,

        hypervisor: a piece of software that runs and manages virtual machines, while also offering these guests a virtual operating platform thats 
                    indistinguishable from actual hardware


    everything as a service:
        X as a service: used more and more with the rise of cloud computing,
                        defn above of cloud computing would be known as infrastructure as a service or IaaS,
        Infrastructure as a service, IaaS: provides servers or building a network for you, (basically abstracts physical infrastructure you need)
        Platform as a service, Paas: provides platform for customers to run their own services, an execution engine is provided for whatever software 
                                    someone wants to run, (basically abstracts away the server instances you need)
        software as a service, SaaS: provides software for the user to use while keeping that software centrally hosted and managed,


    cloud storage:
        cloud storage system: provides a customer with storage space to keep their data secure, accessible, and available,


IPv6:
    Addressing and subnetting:
        Ipv4 addresses are 32 bits while Ipvs 6 addresses are 128 bits in size,
        longhand: is written out as 8 groups of 16 bits each, w each group being made up of four hexadecimal numbers,
        shorthand:
            one rule is you can remove any leading zeroes from a group,
            another rule is you can replace any consecutive groups composed of just zeroes with two colons, ::, only once

        their isn't need to subnet or adress classes because there are so many available adresses for hosts and networks,
        first 64 bits of any ipv6 adress is network ID,
        second 65 bits of any ipv6 address is the host ID,
        if you do need to subnet, ipv6 uses the same CIDR notation that ipv4 implements


        every single ipv6 address that begins with 2001:0db8 has been reserved for documentation or education,
        every single ipv6 address that begins with FF00:: has been reserved for multicasting,
        every single ipv6 address that begins with FE80:: has been reserved for link-local unicast,
            used by ipv6 hosts to receive their network configuration, which is a lot like how DHCP works,


    headers:
        ipv6 header is much simpler than ipv4 field,
        fields:
            version field: 4 bit field that defines what version of ip is in use,
            traffic class field: 8 bit field that defines type of traffic contained within the ip datagram and allows for different classes of traffic 
                                to receive different priorities
            flow label field: 20 bit field that's used in conjunction with the traffic class field for routers to make decisions about the quality of 
                            service level for a specific datagram,
            payload length field: 16 bit field that defines how long the data payload section of the datagram is,
            next header field: unique concept to ipv6, defines what king of header is immediately after this current one, all optional fields are 
                            abstracted away from ipv6 header to reduce data size and if they are included they are chained here,
            hop limit field: 8 bit field that's identical in purpose to TTL field in an ipv4 header,
            source and destination address fields: each 128 bits, 
            next headers: included here if next header field specified that there were next headers,
            data payload: same length as specified in the payload length field


    IPv6 and IPv4 harmony:
        while transitioning to ipv6, it is important that ipv4 and ipv6 both exist at same time,

        ipv4 mapped adress space: implements a way for ipv4 traffic to travel over an ipv6 network,
                                ipv6 address begines with 80 zeros, followed by 16 ones, then remaining 32 bits of ipv6 address is same 32 bits of the ipv4 address,
            
        ipv6 tunnels: implements a way for ipv6 traffic to travel over an ipv4 network,
                    servers take incoming ipv6 traffic and encapsulate it within traditinal ipv4 datagram,
        ipv6 tunnel broker: companies that provide ipv6 tunneling endpoints for you, so you don't have to introduce additional equipment to network,



//*************************************************************************************************** 
//  soft skills
//***************************************************************************************************
half of people at google do not have traditional it backgrounds.  He breaks success down into being able to connect with people, being able to break a problem down into components that are easy to solve.  Learning technicals is pretty easy.  
when interviewing and answering scenario questions, it is important to use clarifying questions,


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
