import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as THREE from 'three';

@Component({
  selector: 'app-interactive-cube',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interactive-cube.component.html',
  styleUrl: './interactive-cube.component.css'
})
export class InteractiveCubeComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvasContainer') containerRef!: ElementRef;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private frameId!: number;
  
  // Objetos para animar
  private consoleMesh!: THREE.Mesh;
  private particles!: THREE.Points;

  // Variables para la consola
  private canvasCtx!: CanvasRenderingContext2D | null;
  private texture!: THREE.CanvasTexture;
  private textToType = '> Hello!\n> Welcome to my Portfolio.\n> \n>';
  private currentText = '';
  private typeIndex = 0;
  private lastTypeTime = 0;

  ngAfterViewInit() {
    this.initScene();
    this.addObjects();
    this.animate();
    this.onResize(); // Asegurar cálculo inicial de cámara
  }

  private initScene() {
    const container = this.containerRef.nativeElement;
    this.scene = new THREE.Scene();
    
    this.camera = new THREE.PerspectiveCamera(40, container.clientWidth / container.clientHeight, 0.1, 1000);
    this.camera.position.z = 10;

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(this.renderer.domElement);
  }

  private addObjects() {
    // 1. CONSOLA 3D (Canvas Texture)
    const canvas = document.createElement('canvas');
    canvas.width = 1000;
    canvas.height = 456;
    this.canvasCtx = canvas.getContext('2d');
    
    this.texture = new THREE.CanvasTexture(canvas);
    
    // Sincronizar el plano 3D con el aspecto del canvas pero un poco más pequeño para que no toque los bordes
    const geometry = new THREE.PlaneGeometry(7.8, 3.56); // Mantiene el ratio 2.19 (1000x456)
    const material = new THREE.MeshBasicMaterial({
      map: this.texture,
      transparent: true,
      side: THREE.DoubleSide
    });
    
    this.consoleMesh = new THREE.Mesh(geometry, material);
    // Inclinación inicial y corrección de posición para la perspectiva
    this.consoleMesh.rotation.y = -0.15;
    this.consoleMesh.rotation.x = 0.05;
    this.consoleMesh.position.x = -0.2; // Compensar visualmente el acercamiento del lado derecho
    this.scene.add(this.consoleMesh);

    // 2. NUBE DE DATOS (Partículas de fondo)
    const pGeometry = new THREE.BufferGeometry();
    const pCount = 1000;
    const coords = new Float32Array(pCount * 3);

    for (let i = 0; i < pCount * 3; i++) {
      coords[i] = (Math.random() - 0.5) * 20;
    }

    pGeometry.setAttribute('position', new THREE.BufferAttribute(coords, 3));
    const pMaterial = new THREE.PointsMaterial({
      size: 0.05,
      color: 0x8b5cf6, // Morado
      transparent: true,
      opacity: 0.5
    });

    this.particles = new THREE.Points(pGeometry, pMaterial);
    this.scene.add(this.particles);

    // Dibujar el estado inicial de la consola
    this.drawConsole();
  }

  private drawConsole() {
    if (!this.canvasCtx) return;
    const ctx = this.canvasCtx;
    // Usar el tamaño real del canvas para evitar recortes
    const w = ctx.canvas.width;
    const h = ctx.canvas.height;

    // Limpiar fondo
    ctx.clearRect(0, 0, w, h);

    // Fondo de la consola (Cristal oscuro)
    ctx.fillStyle = 'rgba(15, 23, 42, 0.85)'; // Slate 900
    ctx.beginPath();
    ctx.roundRect(0, 0, w, h, 20);
    ctx.fill();

    // Barra superior (Top bar)
    ctx.fillStyle = 'rgba(30, 41, 59, 0.95)'; // Slate 800
    ctx.beginPath();
    ctx.roundRect(0, 0, w, 40, [20, 20, 0, 0]);
    ctx.fill();

    // Botones de ventana (Mac OS style)
    const drawBtn = (x: number, color: string) => {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(x, 20, 8, 0, Math.PI * 2);
      ctx.fill();
    };
    drawBtn(30, '#ef4444'); // Cerrar
    drawBtn(60, '#eab308'); // Minimizar
    drawBtn(90, '#22c55e'); // Maximizar

    // Título de la consola
    ctx.fillStyle = '#8796acff'; // Slate 400
    ctx.font = '20px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('kelly@portfolio:~', w / 2, 26);

    // Dibujar texto tipeado
    ctx.fillStyle = '#4ade80'; // Verde terminal (Green 400)
    ctx.font = '32px monospace';
    ctx.textAlign = 'left';
    
    const lines = this.currentText.split('\n');
    lines.forEach((line, i) => {
      ctx.fillText(line, 40, 100 + (i * 45));
    });

    this.texture.needsUpdate = true;
  }

  private animate = () => {
    this.frameId = requestAnimationFrame(this.animate);
    
    const now = Date.now();
    
    // 1. Lógica de "Typing"
    if (now - this.lastTypeTime > 80) { // Velocidad de tipeo
      if (this.typeIndex < this.textToType.length) {
        this.currentText = this.textToType.substring(0, this.typeIndex + 1);
        this.typeIndex++;
        this.drawConsole();
        this.lastTypeTime = now;
      } else {
        // Parpadeo del cursor cuando termina de escribir
        if (now - this.lastTypeTime > 500) {
          if (this.currentText.endsWith('█')) {
            this.currentText = this.currentText.slice(0, -1) + ' ';
          } else {
            this.currentText = this.currentText.slice(0, -1) + '█';
          }
          this.drawConsole();
          this.lastTypeTime = now;
        }
      }
    }

    // 2. Animación de flotación de la consola
    // Se mueve suavemente arriba/abajo y gira levemente
    this.consoleMesh.position.y = Math.sin(now * 0.002) * 0.3;
    this.consoleMesh.rotation.y = Math.sin(now * 0.001) * 0.05 - 0.15;
    
    // Rotación del fondo de estrellas
    this.particles.rotation.y -= 0.001;

    this.renderer.render(this.scene, this.camera);
  }

  @HostListener('window:resize')
  onResize() {
    const container = this.containerRef.nativeElement;
    const aspect = container.clientWidth / container.clientHeight;
    this.camera.aspect = aspect;

    // Alejar la cámara de forma segura basada en el aspect ratio para que el plano siempre quepa a lo ancho
    this.camera.position.z = Math.max(10, 11 / aspect);

    this.camera.updateProjectionMatrix();
    this.renderer.setSize(container.clientWidth, container.clientHeight);
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.frameId);
    this.renderer.dispose();
  }
}
