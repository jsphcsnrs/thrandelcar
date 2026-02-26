      function getModifier(score) {
        return Math.floor((score - 10) / 2)
      }

      function formatModifier(mod) {
        return mod >= 0 ? `+${mod}` : `${mod}`
      }

      function showCharacter(charId) {
        document.getElementById("character-selection").style.display = "none"

        document.querySelectorAll(".character-sheet").forEach((sheet) => {
          sheet.classList.remove("active")
        })

        const sheetId = `${charId}-sheet`
        const sheet = document.getElementById(sheetId)
        sheet.classList.add("active")

        if (sheet.innerHTML === "") {
          generateCharacterSheet(charId, sheet)
        } else {
          initializeSpellSlots(charId)
          initializeTrackers(charId)
        }

        window.scrollTo(0, 0)
        // Initialise scroll-spy state after render
        requestAnimationFrame(updateActiveNavTab)
      }

      function backToSelection() {
        document.querySelectorAll(".character-sheet").forEach((sheet) => {
          sheet.classList.remove("active")
        })
        document.getElementById("character-selection").style.display = "block"
        window.scrollTo(0, 0)
      }

      function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId)
        if (section) {
          const navHeight =
            document.querySelector(".character-sheet.active .mobile-nav")?.offsetHeight || 0
          const targetPosition = section.offsetTop - navHeight - 20
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          })
        }
      }

      function updateActiveNavTab() {
        const mobileNav = document.querySelector(".character-sheet.active .mobile-nav")
        if (!mobileNav || window.getComputedStyle(mobileNav).display === "none") return

        const tabs = mobileNav.querySelectorAll(".mobile-nav-tab[data-section]")
        if (!tabs.length) return

        const navHeight = mobileNav.offsetHeight
        const scrollY = window.scrollY

        // "Top" tab active when near the top of the page
        if (scrollY < 80) {
          tabs.forEach((t) => t.classList.remove("active"))
          const topTab = mobileNav.querySelector('[data-section="top"]')
          if (topTab) topTab.classList.add("active")
          return
        }

        // At the bottom of the page: pick the last section that's at least partially visible
        const atBottom = scrollY + window.innerHeight >= document.documentElement.scrollHeight - 5
        if (atBottom) {
          let lastVisible = null
          tabs.forEach((tab) => {
            if (tab.dataset.section === "top") return
            const el = document.getElementById(tab.dataset.section)
            if (el && el.getBoundingClientRect().bottom > navHeight) {
              lastVisible = tab.dataset.section
            }
          })
          if (lastVisible) {
            tabs.forEach((tab) =>
              tab.classList.toggle("active", tab.dataset.section === lastVisible),
            )
            return
          }
        }

        // Find which section's top edge is closest to (and at or above) the nav bottom
        const threshold = navHeight + 40
        let activeSection = null
        let closestDistance = Infinity

        tabs.forEach((tab) => {
          const sectionId = tab.dataset.section
          if (sectionId === "top") return
          const el = document.getElementById(sectionId)
          if (!el) return
          const top = el.getBoundingClientRect().top
          const dist = Math.abs(top - threshold)
          if (top <= threshold && dist < closestDistance) {
            closestDistance = dist
            activeSection = sectionId
          }
        })

        // Fall back to first real section if nothing is past threshold yet
        if (!activeSection) {
          for (const tab of tabs) {
            if (tab.dataset.section !== "top") {
              activeSection = tab.dataset.section
              break
            }
          }
        }

        tabs.forEach((tab) => {
          tab.classList.toggle("active", tab.dataset.section === activeSection)
        })
      }

      // Scroll handler: sticky nav shadow + active tab scroll-spy
      let ticking = false
      window.addEventListener("scroll", () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            const mobileNav = document.querySelector(".character-sheet.active .mobile-nav")
            if (mobileNav && window.getComputedStyle(mobileNav).display !== "none") {
              if (window.scrollY > 100) {
                mobileNav.classList.add("scrolled")
              } else {
                mobileNav.classList.remove("scrolled")
              }
            }
            updateActiveNavTab()
            ticking = false
          })
          ticking = true
        }
      })

      function toggleSpellDescription(event) {
        const spellCard = event.currentTarget
        spellCard.classList.toggle("expanded")
      }

      // Spell Slot Tracking with localStorage
      function getSpellSlotKey(charId, level) {
        return `spellSlots_${charId}_level${level}`
      }

      function getUsedSlots(charId, level) {
        const key = getSpellSlotKey(charId, level)
        const stored = localStorage.getItem(key)
        try {
          return stored ? JSON.parse(stored) : []
        } catch (e) {
          // Handle old format or corrupted data
          return []
        }
      }

      function setUsedSlots(charId, level, usedArray) {
        const key = getSpellSlotKey(charId, level)
        localStorage.setItem(key, JSON.stringify(usedArray))
        updateSpellSlotDisplay(charId, level)
      }

      function useSpellSlot(charId, level) {
        const char = characters[charId]
        const totalSlots = char.spellSlots[`level${level}`].total
        const usedSlots = getUsedSlots(charId, level)

        // Find the first available slot and mark it as used
        for (let i = 0; i < totalSlots; i++) {
          if (!usedSlots.includes(i)) {
            usedSlots.push(i)
            setUsedSlots(charId, level, usedSlots)
            return
          }
        }
      }

      function resetAllSpellSlots(charId) {
        const char = characters[charId]
        if (!char.spellSlots) return

        for (const level in char.spellSlots) {
          const levelNum = level.replace("level", "")
          setUsedSlots(charId, levelNum, [])
        }
      }

      function updateSpellSlotDisplay(charId, level) {
        const slotElement = document.querySelector(`[data-char="${charId}"][data-level="${level}"]`)
        if (!slotElement) return

        const usedSlots = getUsedSlots(charId, level)
        const boxes = slotElement.querySelectorAll(".spell-slot-box")

        boxes.forEach((box, index) => {
          if (usedSlots.includes(index)) {
            box.classList.add("used")
          } else {
            box.classList.remove("used")
          }
        })
      }

      function initializeSpellSlots(charId) {
        const char = characters[charId]
        if (!char.spellSlots) return

        for (const level in char.spellSlots) {
          const levelNum = level.replace("level", "")
          updateSpellSlotDisplay(charId, levelNum)
        }
      }

      // ── HP Tracking ──────────────────────────────────────────────────

      function getCurrentHP(charId) {
        const stored = localStorage.getItem(`hp_${charId}`)
        return stored !== null ? parseInt(stored) : characters[charId].hp
      }

      function setCurrentHP(charId, value) {
        // Allow above max for temp HP; only clamp at 0
        const clamped = Math.max(0, value)
        localStorage.setItem(`hp_${charId}`, clamped)
        updateHPDisplay(charId)
      }

      function adjustHP(charId, delta) {
        setCurrentHP(charId, getCurrentHP(charId) + delta)
      }

      function updateHPDisplay(charId) {
        const currentHp = getCurrentHP(charId)
        const maxHp = characters[charId].hp
        const currentEl = document.getElementById(`${charId}-hp-current`)
        const deathSavesEl = document.getElementById(`${charId}-death-saves`)

        if (currentEl) {
          currentEl.textContent = currentHp
          currentEl.classList.remove("hp-hurt", "hp-critical", "hp-temp")
          if (currentHp > maxHp) {
            currentEl.classList.add("hp-temp")
          } else {
            const ratio = currentHp / maxHp
            if (ratio <= 0.25) currentEl.classList.add("hp-critical")
            else if (ratio <= 0.5) currentEl.classList.add("hp-hurt")
          }
        }
        if (deathSavesEl) deathSavesEl.style.display = currentHp === 0 ? "block" : "none"
      }

      // ── Death Saves ──────────────────────────────────────────────────

      function getDeathSaves(charId) {
        try {
          const stored = localStorage.getItem(`deathSaves_${charId}`)
          return stored ? JSON.parse(stored) : { successes: 0, failures: 0 }
        } catch (e) {
          return { successes: 0, failures: 0 }
        }
      }

      function saveDeathSaves(charId, saves) {
        localStorage.setItem(`deathSaves_${charId}`, JSON.stringify(saves))
        updateDeathSavesDisplay(charId)
      }

      function toggleDeathSave(charId, type, index) {
        const saves = getDeathSaves(charId)
        saves[type] = saves[type] > index ? index : index + 1
        saves[type] = Math.min(3, Math.max(0, saves[type]))
        saveDeathSaves(charId, saves)
      }

      function resetDeathSaves(charId) {
        saveDeathSaves(charId, { successes: 0, failures: 0 })
      }

      function updateDeathSavesDisplay(charId) {
        const saves = getDeathSaves(charId)
        for (let i = 0; i < 3; i++) {
          const s = document.getElementById(`${charId}-ds-success-${i}`)
          const f = document.getElementById(`${charId}-ds-failure-${i}`)
          if (s) s.classList.toggle("success", i < saves.successes)
          if (f) f.classList.toggle("failure", i < saves.failures)
        }
      }

      // ── Short-rest Resources ─────────────────────────────────────────

      function resKey(charId, name) {
        return `res_${charId}_${name.replace(/[^a-zA-Z0-9]/g, "_")}`
      }

      function resSafeId(charId, name) {
        return `${charId}-res-${name.replace(/[^a-zA-Z0-9]/g, "_")}`
      }

      function getResourceUsed(charId, name) {
        const stored = localStorage.getItem(resKey(charId, name))
        return stored !== null ? parseInt(stored) : 0
      }

      function setResourceUsed(charId, name, used) {
        localStorage.setItem(resKey(charId, name), used)
        updateResourceDisplay(charId, name)
      }

      function toggleResource(charId, name, total, index) {
        const used = getResourceUsed(charId, name)
        setResourceUsed(charId, name, used > index ? index : index + 1)
      }

      function updateResourceDisplay(charId, name) {
        const used = getResourceUsed(charId, name)
        const prefix = resSafeId(charId, name)
        for (let i = 0; i < 20; i++) {
          const box = document.getElementById(`${prefix}-${i}`)
          if (!box) break
          box.classList.toggle("used", i < used)
        }
      }

      // ── Pool Resources (Lay on Hands) ────────────────────────────────

      function getPoolValue(charId, name, maxVal) {
        const stored = localStorage.getItem(`pool_${resKey(charId, name)}`)
        return stored !== null ? parseInt(stored) : maxVal
      }

      function setPoolValue(charId, name, value, maxVal) {
        const clamped = Math.max(0, Math.min(maxVal, value))
        localStorage.setItem(`pool_${resKey(charId, name)}`, clamped)
        updatePoolDisplay(charId, name, maxVal)
      }

      function adjustPool(charId, name, delta, maxVal) {
        setPoolValue(charId, name, getPoolValue(charId, name, maxVal) + delta, maxVal)
      }

      function setPool(charId, name, value, maxVal) {
        setPoolValue(charId, name, parseInt(value) || 0, maxVal)
      }

      function updatePoolDisplay(charId, name, maxVal) {
        const input = document.getElementById(`${resSafeId(charId, name)}-pool`)
        if (input) input.value = getPoolValue(charId, name, maxVal)
      }

      // ── Rest Buttons ─────────────────────────────────────────────────

      function longRest(charId) {
        setCurrentHP(charId, characters[charId].hp)
        resetDeathSaves(charId)
        resetAllSpellSlots(charId)
        const char = characters[charId]
        if (char.shortRestResources) {
          char.shortRestResources.forEach((res) => {
            if (res.pool) setPoolValue(charId, res.name, res.uses, res.uses)
            else setResourceUsed(charId, res.name, 0)
          })
        }
      }

      function shortRest(charId) {
        const char = characters[charId]
        if (char.shortRestResources) {
          char.shortRestResources.forEach((res) => {
            if (res.restType === "short") {
              if (res.pool) setPoolValue(charId, res.name, res.uses, res.uses)
              else setResourceUsed(charId, res.name, 0)
            }
          })
        }
      }

      // ── Resources Block Builder ──────────────────────────────────────

      function generateResourcesBlock(charId, showRestButtons = true) {
        const char = characters[charId]
        const resources = char.shortRestResources || []

        // Skip block entirely if no resources to track
        if (resources.length === 0) return ""

        let inner = ""
        resources.forEach((res) => {
          const safeId = resSafeId(charId, res.name)
          // Escape single quotes in name so onclick handlers aren't broken (e.g. Stone's Endurance)
          const escapedName = res.name.replace(/'/g, "\\'")
          if (res.pool) {
            inner += `
              <div class="resource-item">
                <span class="resource-name">${res.name}</span>
                <div class="resource-controls">
                  <button class="hp-btn" onclick="adjustPool('${charId}','${escapedName}',-1,${res.uses})">−</button>
                  <input type="number" class="hp-input" id="${safeId}-pool" value="${res.uses}" min="0" max="${res.uses}" onchange="setPool('${charId}','${escapedName}',this.value,${res.uses})">
                  <span class="resource-type">/ ${res.uses}</span>
                  <button class="hp-btn" onclick="adjustPool('${charId}','${escapedName}',1,${res.uses})">+</button>
                  <span class="resource-type">${res.restType}</span>
                </div>
              </div>`
          } else {
            const boxes = Array.from(
              { length: res.uses },
              (_, i) =>
                `<div class="resource-box" id="${safeId}-${i}" onclick="toggleResource('${charId}','${escapedName}',${res.uses},${i})"></div>`,
            ).join("")
            inner += `
              <div class="resource-item">
                <span class="resource-name">${res.name}${res.die ? ` <span style="font-size:0.6875rem;color:var(--text-tertiary)">${res.die}</span>` : ""}</span>
                <div class="resource-controls">
                  <div class="resource-boxes">${boxes}</div>
                  <span class="resource-type">${res.restType}</span>
                </div>
              </div>`
          }
        })

        if (!showRestButtons) {
          return `
            <h3>Resources</h3>
            <div class="resource-tracker">${inner}</div>`
        }

        return `
          <div class="stat-block" id="${charId}-resources-section">
            <div class="stat-block-header">
              <h2>Resources</h2>
              <div class="rest-buttons">
                <button class="spell-slots-reset-all" onclick="shortRest('${charId}')">
                  <i class="fa-solid fa-moon"></i> Short Rest
                </button>
                <button class="spell-slots-reset-all" onclick="longRest('${charId}')">
                  <i class="fa-solid fa-sun"></i> Long Rest
                </button>
              </div>
            </div>
            <div class="resource-tracker">${inner}</div>
          </div>`
      }

      // ── Initialize All Trackers ──────────────────────────────────────

      function initializeTrackers(charId) {
        updateHPDisplay(charId)
        updateDeathSavesDisplay(charId)
        const char = characters[charId]
        if (char.shortRestResources) {
          char.shortRestResources.forEach((res) => {
            if (res.pool) updatePoolDisplay(charId, res.name, res.uses)
            else updateResourceDisplay(charId, res.name)
          })
        }
      }

      function generateCharacterSheet(charId, container) {
        const char = characters[charId]

        let html = `
                <button class="back-button" onclick="backToSelection()">← Back</button>
                
                <div class="character-header">
                    <h1>${char.name}</h1>
                    <p class="title">${char.title}</p>
                    <div class="details">
                        <span class="info-chip">${char.race}</span>
                        <span class="info-chip class">${char.class} (${char.subclass})</span>
                        <span class="info-chip">Level ${char.level}</span>
                        <span class="info-chip">${char.alignment}</span>
                    </div>
                </div>
                
                <nav class="mobile-nav">
                    <div class="mobile-nav-tabs">
                        <button class="mobile-nav-tab" data-section="top" onclick="window.scrollTo({top:0,behavior:'smooth'})">
                            <i class="fa-solid fa-arrow-up mobile-nav-icon"></i>
                            <span>Top</span>
                        </button>
                        <button class="mobile-nav-tab" data-section="${charId}-combat-section" onclick="scrollToSection('${charId}-combat-section')">
                            <i class="fa-solid fa-shield-halved mobile-nav-icon"></i>
                            <span>Combat</span>
                        </button>
                        <button class="mobile-nav-tab" data-section="${charId}-skills-section" onclick="scrollToSection('${charId}-skills-section')">
                            <i class="fa-solid fa-bullseye mobile-nav-icon"></i>
                            <span>Skills</span>
                        </button>
                        <button class="mobile-nav-tab" data-section="${charId}-attacks-section" onclick="scrollToSection('${charId}-attacks-section')">
                            <i class="fa-solid fa-hand-fist mobile-nav-icon"></i>
                            <span>Attacks</span>
                        </button>
                        ${
                          char.spells
                            ? `
                            <button class="mobile-nav-tab" data-section="${charId}-spells-section" onclick="scrollToSection('${charId}-spells-section')">
                                <i class="fa-solid fa-wand-sparkles mobile-nav-icon"></i>
                                <span>Spells</span>
                            </button>
                        `
                            : char.shortRestResources?.length
                            ? `
                            <button class="mobile-nav-tab" data-section="${charId}-resources-section" onclick="scrollToSection('${charId}-resources-section')">
                                <i class="fa-solid fa-bolt mobile-nav-icon"></i>
                                <span>Resources</span>
                            </button>
                        `
                            : ""
                        }
                        <button class="mobile-nav-tab" data-section="${charId}-features-section" onclick="scrollToSection('${charId}-features-section')">
                            <i class="fa-solid fa-star mobile-nav-icon"></i>
                            <span>Features</span>
                        </button>
                        <button class="mobile-nav-tab" data-section="${charId}-equipment-section" onclick="scrollToSection('${charId}-equipment-section')">
                            <i class="fa-solid fa-bag-shopping mobile-nav-icon"></i>
                            <span>Equipment</span>
                        </button>
                    </div>
                </nav>
                
                <div id="${charId}-combat-section" class="stats-grid">
                    <div class="stat-block">
                        <h2>Combat Stats</h2>
                        <div class="combat-stats-grid">
                            <div class="combat-stat-tile" id="${charId}-hp-tile">
                                <div class="combat-stat-label">HP</div>
                                <div class="hp-display">
                                    <span class="hp-current" id="${charId}-hp-current">${char.hp}</span>
                                    <span class="hp-sep">/</span>
                                    <span class="hp-max">${char.hp}</span>
                                </div>
                                <div class="hp-controls">
                                    <button class="hp-btn" onclick="adjustHP('${charId}', -1)">−</button>
                                    <button class="hp-btn" onclick="adjustHP('${charId}', 1)">+</button>
                                </div>
                                <div class="death-saves" id="${charId}-death-saves" style="display:none">
                                    <div class="death-saves-label">Death Saves</div>
                                    <div class="death-saves-row">
                                        <span class="death-save-name">Successes</span>
                                        <div class="death-save-boxes">
                                            <div class="death-save-box" id="${charId}-ds-success-0" onclick="toggleDeathSave('${charId}','successes',0)"></div>
                                            <div class="death-save-box" id="${charId}-ds-success-1" onclick="toggleDeathSave('${charId}','successes',1)"></div>
                                            <div class="death-save-box" id="${charId}-ds-success-2" onclick="toggleDeathSave('${charId}','successes',2)"></div>
                                        </div>
                                    </div>
                                    <div class="death-saves-row">
                                        <span class="death-save-name">Failures</span>
                                        <div class="death-save-boxes">
                                            <div class="death-save-box" id="${charId}-ds-failure-0" onclick="toggleDeathSave('${charId}','failures',0)"></div>
                                            <div class="death-save-box" id="${charId}-ds-failure-1" onclick="toggleDeathSave('${charId}','failures',1)"></div>
                                            <div class="death-save-box" id="${charId}-ds-failure-2" onclick="toggleDeathSave('${charId}','failures',2)"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="combat-stat-tile">
                                <div class="combat-stat-label">AC</div>
                                <div class="combat-stat-value">${char.ac}</div>
                            </div>
                            <div class="combat-stat-tile">
                                <div class="combat-stat-label">Speed</div>
                                <div class="combat-stat-value">${char.speed}</div>
                            </div>
                            <div class="combat-stat-tile">
                                <div class="combat-stat-label">Init</div>
                                <div class="combat-stat-value">${formatModifier(char.initiative)}</div>
                            </div>
                          
                        </div>
                    </div>
                    
                    <div class="stat-block">
                        <h2>Ability Scores</h2>
                        <div class="ability-scores">
                            ${Object.entries(char.abilities)
                              .map(
                                ([ability, score]) => `
                                <div class="ability">
                                    <div class="ability-name">${ability}</div>
                                    <div class="ability-score">${score}</div>
                                    <div class="ability-modifier">${formatModifier(getModifier(score))}</div>
                                </div>
                            `,
                              )
                              .join("")}
                        </div>
                    </div>
                    
                    <div class="stat-block">
                        <h2>Saving Throws</h2>
                        <div class="saves-grid">
                            ${Object.entries(char.savingThrows)
                              .map(
                                ([save, data]) => `
                                <div class="save-item${data.proficient ? " proficient" : ""}">
                                    <span class="save-name">${save.toUpperCase()}</span>
                                    <span class="save-bonus">${formatModifier(data.bonus)}</span>
                                </div>
                            `,
                              )
                              .join("")}
                        </div>
                    </div>
                    
                    ${char.spells ? "" : generateResourcesBlock(charId)}

                    <div id="${charId}-skills-section" class="stat-block skills-block">
                        <h2>Skills</h2>
                        <div class="skills-grid">
                            ${char.skills
                              .map(
                                (skill) => `
                                <div class="skill-item${skill.proficient ? " proficient" : ""}">
                                    <span class="skill-name">${skill.name}</span>
                                    <span class="skill-bonus">${formatModifier(skill.bonus)}</span>
                                </div>
                            `,
                              )
                              .join("")}
                        </div>
                    </div>
                </div>
            `

        // Add Attacks, Senses & Languages, Proficiencies sections
        html += `
                <div id="${charId}-attacks-section" class="stats-grid">
                    <div class="stat-block">
                        <h2>Attacks</h2>
                        <ul class="attacks-list">
                            ${char.attacks
                              .map(
                                (attack) => `
                                <li class="attack-item">
                                    <div class="attack-header">
                                        <span class="attack-name">${attack.name}</span>
                                        <span class="attack-bonus">${attack.bonus !== null ? formatModifier(attack.bonus) + " to hit" : "Save"}</span>
                                    </div>
                                    <div class="attack-damage">${attack.damage}</div>
                                    ${attack.notes ? `<div class="attack-notes">${attack.notes}</div>` : ""}
                                </li>
                            `,
                              )
                              .join("")}
                        </ul>
                    </div>
                    
                    <div class="stat-block">
                        <h2>Senses & Languages</h2>
                        <div class="info-section">
                            <div class="info-group">
                                <div class="info-label">Senses</div>
                                <div class="info-content">${char.senses.join(", ")}</div>
                            </div>
                            <div class="info-group">
                                <div class="info-label">Languages</div>
                                <div class="info-content">${char.languages.join(", ")}</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="stat-block">
                        <h2>Proficiencies</h2>
                        <div class="info-section">
                            <div class="info-group">
                                <div class="info-label">Armor</div>
                                <div class="info-content">${char.proficiencies.armor.join(", ")}</div>
                            </div>
                            <div class="info-group">
                                <div class="info-label">Weapons</div>
                                <div class="info-content">${char.proficiencies.weapons.join(", ")}</div>
                            </div>
                            ${
                              char.proficiencies.tools.length > 0 &&
                              char.proficiencies.tools[0] !== "None"
                                ? `
                                <div class="info-group">
                                    <div class="info-label">Tools</div>
                                    <div class="info-content">${char.proficiencies.tools.join(", ")}</div>
                                </div>
                            `
                                : ""
                            }
                        </div>
                    </div>
                </div>
            `

        // Add spells section if character has spells
        if (char.spells) {
          html += `<div class="spells-section" id="${charId}-spells-section">
                    <h2>Spellcasting</h2>`

          if (char.spellSaveDC) {
            html += `
                        <div class="spell-slots">
                            <div class="spell-slot">
                                <div class="spell-slot-label">Spell Save DC</div>
                                <div class="spell-slot-value">${char.spellSaveDC}</div>
                            </div>
                            <div class="spell-slot">
                                <div class="spell-slot-label">Spell Attack</div>
                                <div class="spell-slot-value">+${char.spellAttackBonus}</div>
                            </div>
                        </div>
                    `
          }

          if (char.spellSlots) {
            html += `
                        <div class="spell-slots-header">
                            <div></div>
                            <div class="rest-buttons">
                                <button class="spell-slots-reset-all" onclick="shortRest('${charId}')">
                                    <i class="fa-solid fa-moon"></i> Short Rest
                                </button>
                                <button class="spell-slots-reset-all" onclick="longRest('${charId}')">
                                    <i class="fa-solid fa-sun"></i> Long Rest
                                </button>
                            </div>
                        </div>
                        <div class="spell-slots">`
            for (const [level, slots] of Object.entries(char.spellSlots)) {
              const levelNum = level.replace("level", "")
              html += `
                            <div class="spell-slot" 
                                 data-char="${charId}" 
                                 data-level="${levelNum}"
                                 onclick="useSpellSlot('${charId}', ${levelNum})"
                                 style="cursor: pointer;">
                                <div class="spell-slot-label">Level ${levelNum}</div>
                                <div class="spell-slot-boxes">
                                    ${Array.from(
                                      { length: slots.total },
                                      (_, i) => `
                                        <div class="spell-slot-box" data-slot-index="${i}"></div>
                                    `,
                                    ).join("")}
                                </div>
                            </div>
                        `
            }
            html += `</div>`
            html += generateResourcesBlock(charId, false)
          }

          if (char.spells.cantrips) {
            html += `
                        <h3>Cantrips</h3>
                        <div class="spell-list">
                            ${char.spells.cantrips.map((spell) => generateSpellCard(spell)).join("")}
                        </div>
                    `
          }

          if (char.spells.level1) {
            html += `
                        <h3>1st Level Spells</h3>
                        <div class="spell-list">
                            ${char.spells.level1.map((spell) => generateSpellCard(spell)).join("")}
                        </div>
                    `
          }

          if (char.spells.level2) {
            html += `
                        <h3>2nd Level Spells</h3>
                        <div class="spell-list">
                            ${char.spells.level2.map((spell) => generateSpellCard(spell)).join("")}
                        </div>
                    `
          }

          if (char.spells.level3) {
            html += `
                        <h3>3rd Level Spells</h3>
                        <div class="spell-list">
                            ${char.spells.level3.map((spell) => generateSpellCard(spell)).join("")}
                        </div>
                    `
          }

          html += `</div>`
        }

        // Add features and equipment section
        html += `
                <div id="${charId}-features-section" class="stats-grid">
                    <div class="stat-block">
                        <h2>Key Features</h2>
                        <ul class="features-list">
                            ${char.features.map((feature) => `<li>${feature}</li>`).join("")}
                        </ul>
                    </div>
            `

        // Add maneuvers for Battle Master
        if (char.maneuvers) {
          html += `
                    <div class="stat-block">
                        <h2>Battle Maneuvers</h2>
                        <ul class="features-list">
                            ${char.maneuvers.map((m) => `<li><strong>${m.name}:</strong> ${m.description}</li>`).join("")}
                        </ul>
                    </div>
                `
        }

        // Add equipment section
        html += `
                    <div id="${charId}-equipment-section" class="stat-block">
                        <h2>Equipment</h2>
                        <ul class="equipment-list">
                            ${char.equipment.map((item) => `<li>${item}</li>`).join("")}
                        </ul>
                    </div>
                </div>
            `

        container.innerHTML = html

        container.querySelectorAll(".spell-card").forEach((card) => {
          card.addEventListener("click", toggleSpellDescription)
        })

        // Initialize spell slot tracking and HP/resource trackers
        initializeSpellSlots(charId)
        initializeTrackers(charId)
      }

      function generateSpellCard(spell) {
        return `
                <div class="spell-card">
                    <div class="spell-header">
                        <div class="spell-title-group">
                            <span class="spell-name">${spell.name}</span>
                            <span class="spell-level">${spell.level}${spell.ritual ? " • Ritual" : ""}</span>
                        </div>
                        <i class="fa-solid fa-chevron-down expand-icon"></i>
                    </div>
                    <div class="spell-meta">
                        <span class="spell-meta-item">
                            <i class="fa-regular fa-clock spell-meta-icon"></i>
                            ${spell.castingTime}
                        </span>
                        <span class="spell-meta-item">
                            <i class="fa-solid fa-location-dot spell-meta-icon"></i>
                            ${spell.range}
                        </span>
                        <span class="spell-meta-item">
                            <i class="fa-solid fa-cube spell-meta-icon"></i>
                            ${spell.components}
                        </span>
                        <span class="spell-meta-item">
                            <i class="fa-regular fa-hourglass spell-meta-icon"></i>
                            ${spell.duration}
                        </span>
                    </div>
                    <div class="spell-description">${spell.description}</div>
                </div>
            `
      }

      function generateCharacterGrid() {
        const grid = document.getElementById("character-grid")
        grid.innerHTML = Object.entries(characters).map(([id, char]) => `
          <div
            class="character-card ${char.theme}"
            style="--accent-color: ${char.accentColor}; --accent-color-rgb: ${char.accentColorRgb}"
            onclick="showCharacter('${id}')"
          >
            <h2>${id.charAt(0).toUpperCase() + id.slice(1)}</h2>
            <p class="subtitle">${char.title}</p>
            <div class="class-info">
              <span class="info-chip">${char.race}</span>
              <span class="info-chip class">${char.class}</span>
              <span class="info-chip">Level ${char.level}</span>
            </div>
          </div>
        `).join("")
      }

      document.addEventListener("DOMContentLoaded", function () {
        generateCharacterGrid()
        document.getElementById("character-selection").style.display = "block"
      })
