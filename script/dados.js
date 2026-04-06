// minhas skills 
const skills = document.querySelector(".var_skills")

fetch("dados/skills.json")
    .then(res => res.json())
    .then(skill => {
        skill.forEach((e,i) => {
            const brain = document.createElement("div")
            const box_skill = document.createElement("div")
            const barra = document.createElement("div")
            const tags = document.createElement("div")
            const porcent = document.createElement("div")
            const icone = document.createElement("i")
            const nameStrong = document.createElement("strong")
            const porcentStrong = document.createElement("strong")
            
            brain.classList.add("brain")
            box_skill.classList.add("box_skill")
            barra.classList.add("barra")
            tags.classList.add("tags")
            porcent.classList.add("porcent")
            icone.className = e.icone
            
            nameStrong.textContent = e.name 
            porcentStrong.textContent = e.porcent + "%"
            barra.style.setProperty("--progress", e.porcent + "%")
            if (e.porcent <= 30) {
                barra.classList.add("iniciante")
                barra.classList.remove("avancado")
            }else {
                barra.classList.add("avancado")
                barra.classList.remove("iniciante")
            }
            
            skills.appendChild(brain)
            brain.appendChild(box_skill)
            brain.appendChild(barra)
            box_skill.appendChild(tags)
            box_skill.appendChild(porcent)
            tags.appendChild(icone)
            tags.appendChild(nameStrong)
            porcent.appendChild(porcentStrong)
            
        })
    })
// Meus projetos 
const meusSites = document.querySelector(".meus_sites")
fetch("dados/project.json")
    .then(res => res.json())
    .then(projetos => {
        projetos.forEach((e,i) => {
            const link = document.createElement("a")
            const site = document.createElement("div")
            const campoImg = document.createElement("div")
            const campoTxt = document.createElement("div")
            const img = document.createElement("img")
            const ano = document.createElement("span")
            const nome = document.createElement("strong")
            const paragrafo = document.createElement("p")
            const detalhes = document.createElement("details")
            const descricao = document.createElement("summary")
            
            link.classList.add("page-link")
            site.classList.add("sites")
            campoImg.classList.add("img")
            campoTxt.classList.add("txt")
            detalhes.classList.add("descricao")
            
            link.setAttribute("href", e.href)
            link.setAttribute("target", "_blank")
            img.src = e.src
            img.setAttribute("alt", "Imagem com link para ir para o site")
            ano.textContent = e.ano
            nome.textContent = e.name 
            paragrafo.textContent = e.p 
            detalhes.textContent = e.detail
            descricao.textContent = "Saiba mais..."
            
            meusSites.appendChild(link)
            link.appendChild(site)
            site.appendChild(campoImg)
            site.appendChild(campoTxt)
            campoImg.appendChild(img)
            campoTxt.appendChild(ano)
            campoTxt.appendChild(nome)
            campoTxt.appendChild(paragrafo)
            campoTxt.appendChild(detalhes)
            detalhes.appendChild(descricao)
        })
    })