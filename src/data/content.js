import { NetworkShieldLogo } from '../components/ProjectLogos'
import { ArrowLeftRight, BookOpen, Blocks, BrainCircuit, Camera, CloudCog, GraduationCap, LandPlot, PanelsTopLeft, PenTool, Shirt, Smartphone, TrendingUp, Truck, Wallet, WashingMachine } from 'lucide-react'

// Text for these lists lives in i18n/translations.js, in the same order.
export const serviceIcons = [PanelsTopLeft, Smartphone, Blocks, BrainCircuit, PenTool, CloudCog]

// Projects built by the Shahkar team
export const projectMeta = [
  { icon: Camera, stack: ['Django', 'YOLO11', 'DeepFace', 'OpenCV', 'WebSockets'] },
  { icon: ArrowLeftRight, stack: ['Django REST', 'React', 'Python'] },
  { icon: Wallet, stack: ['Flutter', 'Dart', 'REST API'] },
  { icon: Truck, stack: ['Django REST', 'React', 'TypeScript', 'PostgreSQL'] },
  { icon: BookOpen, stack: ['Flutter', 'Dart'] },
  { icon: NetworkShieldLogo, tone: 'blue', stack: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'WebSocket', 'SNMP', 'ICMP/Ping'] },
  { icon: LandPlot, stack: [] },
  { icon: WashingMachine, stack: ['Django REST', 'React', 'Vite'] },
  { icon: Shirt, stack: ['Flutter', 'Dart'] },
  { icon: TrendingUp, stack: ['Django', 'Pandas', 'JavaScript'] },
  { icon: GraduationCap, stack: ['PHP', 'MySQL', 'JavaScript'] },
]

export const navigation = [
  ['home', '/'], ['services', '/services'], ['projects', '/projects'], ['about', '/about'], ['contact', '/contact'],
]
