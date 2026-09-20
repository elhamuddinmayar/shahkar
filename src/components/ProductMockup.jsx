import { Activity, ArrowUpRight, BarChart3, Box, CircleCheck, LayoutDashboard, MoreHorizontal, Package, TrendingUp, Users } from 'lucide-react'

export default function ProductMockup({ variant = 'operations', compact = false }) {
  return <div className={`product-mockup product-mockup--${variant} ${compact ? 'product-mockup--compact' : ''}`} aria-label={`${variant} interface concept`} role="img">
    <div className="mockup-sidebar">
      <span className="mockup-brand">S<span>.</span></span>
      <LayoutDashboard size={16} /><BarChart3 size={16} /><Box size={16} /><Users size={16} />
      <span className="mockup-sidebar-bottom"><MoreHorizontal size={16} /></span>
    </div>
    <div className="mockup-main">
      <div className="mockup-top"><span>Workspace <span className="mockup-chevron">/ Overview</span></span><span className="mockup-avatar">SK</span></div>
      <div className="mockup-greeting"><div><small>MONDAY, 16 AUGUST</small><strong>{variant === 'commerce' ? 'Commerce overview' : variant === 'insights' ? 'Intelligence overview' : 'Good morning, team'}</strong></div><span className="mockup-live">● Live overview</span></div>
      <div className="mockup-metrics">
        <div><span><Package size={14} /> Active workflows</span><strong>24 <TrendingUp size={14} /></strong><small>Across your workspace</small></div>
        <div><span><CircleCheck size={14} /> Tasks completed</span><strong>86%</strong><small>This period</small></div>
        <div><span><Activity size={14} /> System status</span><strong>Healthy</strong><small>All services running</small></div>
      </div>
      <div className="mockup-bottom">
        <div className="mockup-chart"><div className="mockup-panel-title">Activity over time <MoreHorizontal size={16} /></div><div className="chart-bars">{[32,47,41,62,54,76,58,71,64,89,78,92].map((height, index) => <span key={index} style={{ height: `${height}%` }} />)}</div><div className="chart-labels"><span>JAN</span><span>MAR</span><span>MAY</span><span>JUL</span><span>SEP</span><span>NOV</span></div></div>
        <div className="mockup-activity"><div className="mockup-panel-title">Recent activity <ArrowUpRight size={15} /></div>{['Order workflow updated', 'Report is ready', 'New team member'].map((item, index) => <div className="activity-row" key={item}><span className={`activity-dot activity-dot--${index}`} /><span>{item}<small>{index + 1}h ago</small></span></div>)}</div>
      </div>
    </div>
  </div>
}
