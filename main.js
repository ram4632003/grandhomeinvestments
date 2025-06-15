* { margin: 0; padding: 0; box-sizing: border-box; }
body {
  font-family: Arial, sans-serif;
  background: #f4f4f4;
  color: #333;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.top-toggle {
  display: flex;
  justify-content: center;
  position: relative;
  background: #005f73;
}

.tab-btn {
  flex: 1;
  padding: 14px 20px;
  background: transparent;
  border: none;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: color 0.3s;
  z-index: 2;
}

.tab-btn.active {
  color: #005f73;
}

.toggle-indicator {
  position: absolute;
  bottom: 0;
  width: 50%;
  height: 100%;
  background: #94d2bd;
  transition: transform 0.3s ease;
  z-index: 1;
}

.tab-btn:first-child.active ~ .toggle-indicator {
  transform: translateX(0%);
}
.tab-btn:last-child.active ~ .toggle-indicator {
  transform: translateX(100%);
}

.hero {
  text-align: center;
  background: #0a9396;
  color: white;
  padding: 60px 20px;
}

main {
  flex: 1;
  position: relative;
  overflow: hidden;
}

.screen {
  position: absolute;
  inset: 0;
  padding: 40px;
  background: white;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.4s ease;
}

.screen.active {
  opacity: 1;
  visibility: visible;
}

footer {
  text-align: center;
  padding: 20px;
  background: #005f73;
  color: white;
}

