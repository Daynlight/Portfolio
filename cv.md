<div align="center">

# **Daniel Stodulski** <br>Software Developer

</div>



Email: DanielStodulski000@gmail.com  
Phone: +48 785 919 909
GitHub: [github.com/Daynlight](https://github.com/Daynlight)



---



## About me

Software developer with over **4 years** of **non‑commercial** programming experience, currently focused on ```C``` and ```C++```. I enjoy **low‑level** and **cross‑platform** development, including ```networking```, ```windowing```, ```engines```, ```tools``` and ```optimization```. Also I want to learn some **higher level programming languages** like ```C#``` and ```Java```. I have strong **ambitions** and want to keep **improving my skills** in **systems programming**, **architecture**, **performance**, and **graphics**. I learn new concepts **quickly** and can **implement** them with relatively little ramp‑up time. I’m also good at **understanding** and **re‑creating** existing systems based on ```ideas```, ```problems that they solved```, ```documentation``` or ```limited reference code```.



## Programming Languages

- ```C```/```C++```.
- ```SQL```.
- ```Python```.
- ```YAML```.
- ```GLSL```.

## Tools & Platforms

- **Build Systems**: ```CMake```, ```Premake```.
- **VCS / CI**: ```Git```, ```GitHub```, ```Github Actions```.
- **OS**: ```Linux```, ```Windows```.
- **Containers**: ```Docker```.
- **Databases**: ```MySQL```, ```SQLite```.
- **IDEs**: ```MSVS```, ```VS Code```.
- **Documentation**: ```Markdown```, ```DrawIO```.
- **Debugging / Profiling**: ```gdb```, ```Valgrind```, ```KCachegrind```.



## Other Skills

- **WebDev**: ```HTML```, ```CSS```, ```JavaScript```.
- **CSS Frameworks**: ```Bootstrap```.
- **Frameworks**: Basic experience with ```Node.js```, ```React.js```, ```Vite.js```, ```Express.js```.
- **2D/3D content creation**: ```Blender (basic modeling)```, ```GIMP```, ```Krita```.



## Interests

- **Low-level programming** and **systems design**.
- **Computer graphics** and **rendering**.
- **Game engines** and **developer tools**.
- **Performance** and **optimization**, especially in **game engines**.
- Occasionally **drawing** and **3D modeling**.



## Experience

- **Open-source contributions**:
  - [skill-icons](https://github.com/LelouchFR/skill-icons)
  - [linkfree-generator](https://github.com/chriskthomas/linkfree-generator)
- **University and personal projects** in C/C++ focused on **systems programming**, **architecture**, **stability**, **cross-platforming**, **networking**, and **engine/tool** development.
 


<!-- ## Education -->



<!-- ## Key Skills -->



## Projects

### [CPU](https://github.com/daynlight/CPU) – Simple CPU Emulator and Assembler (Logisim, Python)

- Implements **ALU**, **CU**, **Magistral for data transfer**, **Registers**, **RAM**, **Terminal**, **Keyboard input**, **Some Disks**, **Custom CPU operations**.
- Designed in Logisim on logic gates and modules like **RAM**.
- Ready to **write OS**.
- There are some errors with **disk swaps**.
- Includes a **simple assembler** written in ```python``` for **easier programming**.
- Includes a simple **bios** and **calculator program**.
- The **Calculator** doesn't **parse input to int**, which causes problems with **larger numbers**, but the **focus** was on **logic gates** and **architecture**. 
- Maybe in the future, I will add a **full OS** and **GPU**.
- This demonstrates **understanding of low-level architecture**, **instructions**, and **execution**.
- This is an **old project** and the most **popular** on my GitHub.

### [CWindow](https://github.com/daynlight/CWindow) – Cross-Platform Window & Rendering Library (C++)

- Library for **creating windows** and **handling events** on multiple platforms [```Windows```, ```Linux```].
- Provides ```Renderer```, ```DrawsShader```, ```ComputeShader```, ```Uniform```, ```Texture```, ```Mesh``` designed for **modularity** and **stability**. Used in other projects like [Graphite](https://github.com/daynlight/Graphite).
<!-- - Contains good github **wiki** and **community standards**. -->
- Integration with imgui for editor gui.
- **Ready for simple usage**, but in future I will: 
  - Extend shaders by adding ```geometry shader```, ```tessellation shader``` etc. And adding ```enum``` types. 
  - Enhance ```Mesh``` via **better data passing** base on ```Bytes``` and passing structure of them.
  - **Texture manager** that optimize texture savings on GPU via **mipmaps** and **data life time analyze**.
  - Add more **Rendering APIs** like ```Vulkan```, ```DirectX```.

### [Network](https://github.com/daynlight/Network) – Cross-Platform Networking Library (C)

- Lightweight C library that wraps TCP/UDP sockets for easier networking in C/C++.
- Focuses on a simple API, non-blocking I/O, and cross-platform support.
- Contains good github **wiki** and **community standards**.

### [Graphite](https://github.com/daynlight/Graphite) – Math Visualization Tool (C++) **[In Development]**

- Script **hot-swapping** base on last write time.
- Uses ```fork``` method as testing in **Sandbox mode** for safer **script edition**.
- Custom Flags like **verbose/debug**, **sandbox**, **init**, **help**.
- Uses my other library [CWindow](https://github.com/daynlight/CWindow) for rendering.
- Contains good github **wiki** and **community standards**.
- **Installer** that copies **required headers** to ```/usr/local/include/Graphite/```.
- Now is focused on **Linux**, but in future I will add **cross-platform support**. 
- **In plans**:
  - **Package Manager** for community.
  - Drawing optimization via **function norm** and **SSBO**.
  - **3D support** with **Level of details**.
  - Init with **template**.
  - **Windows** support.