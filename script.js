// Edita esta lista para cambiar las protectoras que se muestran.
// Tipos de enlace disponibles: "web", "instagram", "facebook".
const shelters = [
  {
    name: "Gata Lilit",
    emoji: "🐱",
    links: [
      { type: "web", url: "https://gatalilit.es/" },
      { type: "instagram", url: "https://www.instagram.com/gata_lilit/?hl=es" },
      { type: "facebook", url: "https://www.facebook.com/p/Gata-Lilit-100085818837894/" },
    ],
  },
  {
    name: "Bichos Raros",
    emoji: "🐾",
    links: [
      { type: "web", url: "https://bichosraros.org/" },
      { type: "instagram", url: "https://www.instagram.com/bichosraros.org.ig/" },
      { type: "facebook", url: "https://www.facebook.com/p/BichosRarosorg-100067801920617/" },
    ],
  },
  {
    name: "Polineko",
    emoji: "🐈",
    links: [
      { type: "web", url: "https://www.polineko.com/" },
      { type: "instagram", url: "https://www.instagram.com/polineko_madrid/" },
      { type: "facebook", url: "https://www.facebook.com/Polineko/" },
    ],
  },
];

const PLATFORMS = {
  web: {
    label: "Web",
    svg: '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
  },
  instagram: {
    label: "Instagram",
    svg: '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>',
  },
  facebook: {
    label: "Facebook",
    svg: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
  },
};

function createIcon(svgContent) {
  const wrapper = document.createElement("span");
  wrapper.className = "shelter__icon";
  wrapper.setAttribute("aria-hidden", "true");
  wrapper.innerHTML =
    '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" ' +
    'stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + svgContent + "</svg>";
  return wrapper;
}

function createShelterItem(shelter, index) {
  const li = document.createElement("li");
  li.className = "shelter";

  const panelId = `shelter-panel-${index}`;

  const button = document.createElement("button");
  button.className = "shelter__toggle";
  button.type = "button";
  button.setAttribute("aria-expanded", "false");
  button.setAttribute("aria-controls", panelId);

  const emoji = document.createElement("span");
  emoji.className = "shelter__emoji";
  emoji.setAttribute("aria-hidden", "true");
  emoji.textContent = shelter.emoji;

  const name = document.createElement("span");
  name.className = "shelter__name";
  name.textContent = shelter.name;

  const chevron = document.createElement("span");
  chevron.className = "shelter__chevron";
  chevron.setAttribute("aria-hidden", "true");
  chevron.textContent = "▾";

  button.append(emoji, name, chevron);

  const panel = document.createElement("div");
  panel.className = "shelter__panel";
  panel.id = panelId;
  panel.hidden = true;

  const links = document.createElement("ul");
  links.className = "shelter__links";
  shelter.links.forEach(({ type, url }) => {
    const platform = PLATFORMS[type];
    if (!platform) return;
    const item = document.createElement("li");
    const a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.className = `shelter__link shelter__link--${type}`;
    a.title = `${platform.label} de ${shelter.name}`;
    a.setAttribute("aria-label", `${platform.label} de ${shelter.name}`);
    a.appendChild(createIcon(platform.svg));
    item.appendChild(a);
    links.appendChild(item);
  });

  panel.appendChild(links);

  button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!expanded));
    panel.hidden = expanded;
  });

  li.append(button, panel);
  return li;
}

const list = document.getElementById("shelters-list");
shelters.forEach((shelter, i) => list.appendChild(createShelterItem(shelter, i)));
