import { ArrowLeftRight, BookOpen, Blocks, BrainCircuit, Camera, CloudCog, PanelsTopLeft, PenTool, Smartphone, Truck } from 'lucide-react'

// Text for these lists lives in i18n/translations.js, in the same order.
export const serviceIcons = [PanelsTopLeft, Smartphone, Blocks, BrainCircuit, PenTool, CloudCog]

// Projects from github.com/elhamuddinmayar
export const projectMeta = [
  { icon: Camera, stack: ['Django', 'YOLO11', 'DeepFace', 'OpenCV', 'WebSockets'] },
  { icon: ArrowLeftRight, stack: ['Django REST', 'React', 'Flutter'] },
  { icon: Truck, stack: ['Django REST', 'React', 'TypeScript', 'PostgreSQL'] },
  { icon: BookOpen, stack: ['Flutter', 'Dart'] },
]

export const navigation = [
  ['home', '/'], ['services', '/services'], ['projects', '/projects'], ['about', '/about'], ['contact', '/contact'],
]
