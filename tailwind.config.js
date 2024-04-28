/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./html files/**.html"],
  theme: {
    extend: {
      backgroundImage: {
        'HomeCover': "url('./Images/Bg-Home-Img.jpeg')",
        'login-cover': "url('./Images/bg-login.jpg')",
        'profile': "url('https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        'mesh':"url('./Images/mesh-gradient.png')",
        'brain':"url('https://incubator.ucf.edu/wp-content/uploads/2023/07/artificial-intelligence-new-technology-science-futuristic-abstract-human-brain-ai-technology-cpu-central-processor-unit-chipset-big-data-machine-learning-cyber-mind-domination-generative-ai-scaled-1-1500x1000.jpg')",
        "prefered":"url('https://interestingengineering.com/_next/image?url=https%3A%2F%2Fimages.interestingengineering.com%2F2023%2F05%2F14%2Fimage%2Fjpeg%2FB2Q8idGkZUlSMYKAUGMZkDx4mJ533yB9NsRlACRK.jpg&w=3840&q=75')",
        'nn':"url('https://news.mit.edu/sites/default/files/images/202211/MIT-Neural-Networks-01.gif')",
        'nn-2':"url('https://www.trentonsystems.com/hubfs/Neural_Networks.png')",
        'nn-3':"url('https://i.pinimg.com/originals/7a/d0/c9/7ad0c9b192167fbeac6f53ff97a656df.gif')",
        'building':"url('./Images/building.jpg')",
        'vr':"url('./Images/vr.jpg')",
      },
      spacing: {
        'ScreenHeight': 'calc(100vh - 4rem)',
      }
    },
  },
  plugins: [],
}

