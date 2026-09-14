export default function Home() {
  const reviews = [
    {
      name: "豆包妈妈",
      pet: "英短猫 · 低压洗护",
      text: "第一次带胆小猫来洗护，店员全程很轻声，结束后还发了护理记录，特别放心。",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
    },
    {
      name: "阿柴爸爸",
      pet: "金毛 · 精致洗护",
      text: "我家金毛毛量大，洗完很蓬松，耳朵也清理得很细。预约制不用排队。",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
    },
    {
      name: "糯米主人",
      pet: "泰迪 · 美容造型",
      text: "造型很自然，没有剪得太夸张。美容师会先沟通想要的长度，体验很好。",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
    },
    {
      name: "小七姐姐",
      pet: "布偶猫 · 梳毛除浮毛",
      text: "长毛猫打结的位置处理得很温柔，没有硬扯。回家后毛顺了很多，也不再一直舔毛。",
      avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=120&q=80",
    },
    {
      name: "可乐爸爸",
      pet: "柯基 · 基础洁净",
      text: "脚底毛和指甲修得很干净，洗完香味不刺鼻。店里消毒流程看得到，挺安心。",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
    },
    {
      name: "团子妈妈",
      pet: "比熊 · 圆脸造型",
      text: "剪完脸型很圆，眼周也清爽了。美容师还提醒我们泪痕护理方法，很细心。",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80",
    },
    {
      name: "Lucky 主人",
      pet: "边牧 · 毛结处理",
      text: "运动后毛结比较多，店员先说明可能加时和费用，处理结果比预期好很多。",
      avatar: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=120&q=80",
    },
    {
      name: "芝麻哥哥",
      pet: "暹罗猫 · 独立时段",
      text: "猫咪怕吹风，店里安排了安静时段，中途还拍视频同步状态，体验很透明。",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80",
    },
  ];
  return (
    <>
      <header className="header">
        <nav className="nav">
          <a className="brand" href="#top"><span className="brand-mark">爪</span><span>毛孩子洗护馆</span></a>
          <div className="links"><a href="#services">服务</a><a href="#care">护理标准</a><a href="#pricing">价格</a><a href="#reviews">口碑</a><a href="#location">位置</a><a href="#booking">预约</a></div>
          <a className="btn" href="#booking">立即预约</a>
        </nav>
      </header>
      <main id="top">
        <section className="hero">
          <div className="hero-slides" aria-hidden="true">
            <div className="hero-slide hero-slide-1" />
            <div className="hero-slide hero-slide-2" />
            <div className="hero-slide hero-slide-3" />
          </div>
          <div className="hero-inner">
            <div className="eyebrow">专业洗护 · 温柔陪伴 · 透明消毒</div>
            <h1>毛孩子洗护馆</h1>
            <p>为猫咪和狗狗提供洗澡、美容、除毛、SPA、耳眼护理和基础健康观察。每一只小客人都有独立工具、专属记录和耐心安抚。</p>
            <div className="hero-actions"><a className="btn" href="#booking">预约到店</a><a className="btn light" href="#pricing">查看套餐</a></div>
            <div className="stats"><div className="stat"><strong>6年</strong><span>洗护经验</span></div><div className="stat"><strong>4200+</strong><span>服务宠物</span></div><div className="stat"><strong>1宠1消毒</strong><span>工具与浴位</span></div></div>
          </div>
        </section>
        <section id="services">
          <div className="container">
            <div className="section-head"><h2>常用洗护服务</h2><p>从日常清洁到精细造型，按宠物品种、毛量、皮肤状态和性格安排合适流程。</p></div>
            <div className="grid-3">
              <article className="card"><img src="https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=900&q=85" alt="正在接受洗护的狗狗" /><div className="card-body"><h3>日常香波洗护</h3><p>温和清洁、吹干梳理、指甲修剪、脚底毛处理，适合每月基础护理。</p></div></article>
              <article className="card"><img src="https://images.unsplash.com/photo-1591946614720-90a587da4a36?auto=format&fit=crop&w=900&q=85" alt="宠物美容修剪" /><div className="card-body"><h3>造型修剪</h3><p>圆脸、泰迪装、清爽短毛、局部精修，由美容师根据体型比例设计。</p></div></article>
              <article className="card"><img src="https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=900&q=85" alt="安静休息的猫咪" /><div className="card-body"><h3>猫咪低压洗护</h3><p>预约制独立时段，减少等待和噪音刺激，适合敏感、胆小的猫咪。</p></div></article>
            </div>
          </div>
        </section>
        <section id="care" className="soft">
          <div className="container features">
            <div className="feature-photo" role="img" aria-label="美容师陪伴宠物" />
            <div><div className="section-head"><h2>让洗护变得更安心</h2></div><div className="checks"><div className="check"><span className="check-icon">✓</span><div><h3>洗前皮肤与耳眼检查</h3><p>记录红疹、皮屑、耳垢、泪痕等状态，必要时提醒主人进一步就医。</p></div></div><div className="check"><span className="check-icon">✓</span><div><h3>按毛发和肤质选香波</h3><p>幼宠、敏感肌、长毛、双层毛都使用不同护理方案，避免过度清洁。</p></div></div><div className="check"><span className="check-icon">✓</span><div><h3>透明护理记录</h3><p>服务结束后同步护理建议、下次洗护周期和现场照片。</p></div></div></div></div>
          </div>
        </section>
        <section id="pricing">
          <div className="container">
            <div className="section-head"><h2>套餐价格</h2><p>价格会根据体重、毛量和打结情况微调，到店前可先发送照片预估。</p></div>
            <div className="grid-3">
              <article className="price-card"><span className="tag">小型犬 / 猫咪</span><h3>基础洁净</h3><p>适合日常洗澡和轻度护理。</p><div className="price">¥88 <small>起</small></div><ul><li>香波洗浴与护毛</li><li>吹干拉毛与梳理</li><li>指甲、耳朵、脚底毛</li></ul></article>
              <article className="price-card featured"><span className="tag">热门推荐</span><h3>精致洗护</h3><p>更完整的清洁和局部细节处理。</p><div className="price">¥168 <small>起</small></div><ul><li>基础洁净全套</li><li>局部修剪与泪痕清洁</li><li>毛结处理与护毛喷雾</li></ul></article>
              <article className="price-card"><span className="tag">造型护理</span><h3>美容造型</h3><p>适合需要全身修剪或定制造型。</p><div className="price">¥268 <small>起</small></div><ul><li>全身造型设计</li><li>精修脸部和四肢线条</li><li>洗护后照片记录</li></ul></article>
            </div>
          </div>
        </section>
        <section>
          <div className="container"><div className="section-head"><h2>预约到店流程</h2><p>减少等待，把时间留给安抚和护理。</p></div><div className="process"><div className="step"><h3>线上预约</h3><p>选择宠物类型、服务套餐和期望到店时间。</p></div><div className="step"><h3>到店评估</h3><p>美容师确认毛量、打结、皮肤和性格状态。</p></div><div className="step"><h3>专属洗护</h3><p>独立工具和浴位，温柔安抚，分步护理。</p></div><div className="step"><h3>护理反馈</h3><p>同步现场照片、护理记录和下次建议。</p></div></div></div>
        </section>
        <section id="reviews" className="reviews">
          <div className="container">
            <div className="section-head">
              <h2>主人们怎么说</h2>
              <p>干净、耐心、准时，是我们最看重的门店体验。真实反馈会持续滚动展示，悬停即可慢慢看。</p>
            </div>
          </div>
          <div className="review-carousel" aria-label="客户评价轮播">
            <div className="review-track">
              {[...reviews, ...reviews].map((review, index) => (
                <article className="review-card" key={`${review.name}-${index}`}>
                  <div className="stars" aria-label="五星评价">★★★★★</div>
                  <p>{review.text}</p>
                  <div className="reviewer">
                    <img className="avatar" src={review.avatar} alt={`${review.name}头像`} />
                    <span>
                      <strong>{review.name}</strong>
                      <small>{review.pet}</small>
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="location" className="location">
          <div className="container">
            <div className="section-head"><h2>门店位置</h2><p>就在上海市宜川路街道陕西北路 1620 号，街区图把店铺位置清楚标出来，到店前可直接用地图导航。</p></div>
            <div className="location-wrap">
              <div className="pet-map image-map"><img className="store-map-image" src="/assets/store-location-map.png" alt="上海市宜川路街道陕西北路1620号毛孩子洗护馆位置地图" /></div>
              <aside className="location-info">
                <h3>毛孩子洗护馆 · 陕西北路店</h3>
                <div className="location-list">
                  <div className="location-item"><span className="location-icon">址</span><div><strong>门店地址</strong><span>上海市宜川路街道陕西北路 1620 号</span></div></div>
                  <div className="location-item"><span className="location-icon">时</span><div><strong>营业时间</strong><span>周一至周日 10:00-20:00</span></div></div>
                  <div className="location-item"><span className="location-icon">约</span><div><strong>到店建议</strong><span>建议提前 1 天预约，猫咪和敏感宠物可安排更安静的时段。</span></div></div>
                </div>
                <div className="map-actions"><a className="btn" href="https://uri.amap.com/search?keyword=%E4%B8%8A%E6%B5%B7%E5%B8%82%E5%AE%9C%E5%B7%9D%E8%B7%AF%E8%A1%97%E9%81%93%E9%99%95%E8%A5%BF%E5%8C%97%E8%B7%AF1620%E5%8F%B7" target="_blank" rel="noopener">高德导航</a><a className="btn light" href="https://map.baidu.com/search/%E4%B8%8A%E6%B5%B7%E5%B8%82%E5%AE%9C%E5%B7%9D%E8%B7%AF%E8%A1%97%E9%81%93%E9%99%95%E8%A5%BF%E5%8C%97%E8%B7%AF1620%E5%8F%B7" target="_blank" rel="noopener">百度地图</a></div>
              </aside>
            </div>
          </div>
        </section>
        <section id="booking">
          <div className="container booking">
            <div className="booking-info"><h2>今天给它约一个清爽时刻</h2><p>营业时间：周一至周日 10:00-20:00<br />地址：上海市宜川路街道陕西北路 1620 号<br />电话：138-0000-8888</p></div>
            <form><div className="form-grid"><label>主人姓名<input type="text" name="name" placeholder="请输入姓名" /></label><label>联系电话<input type="tel" name="phone" placeholder="请输入手机号" /></label><label>宠物类型<select name="pet"><option>狗狗</option><option>猫咪</option><option>其他小宠</option></select></label><label>预约服务<select name="service"><option>基础洁净</option><option>精致洗护</option><option>美容造型</option><option>猫咪低压洗护</option></select></label><label>期望日期<input type="date" name="date" /></label><label>期望到店时间<select name="arrivalTime" defaultValue=""><option value="" disabled>请选择到店时间</option><option>10:00-10:30</option><option>10:30-11:00</option><option>11:00-11:30</option><option>11:30-12:00</option><option>13:00-13:30</option><option>13:30-14:00</option><option>14:00-14:30</option><option>14:30-15:00</option><option>15:00-15:30</option><option>15:30-16:00</option><option>16:00-16:30</option><option>16:30-17:00</option><option>17:00-17:30</option><option>17:30-18:00</option><option>18:00-18:30</option><option>18:30-19:00</option></select></label><label className="wide">备注<textarea name="message" placeholder="例如：体重、毛量、是否怕水、是否有皮肤敏感等" /></label></div><div className="form-actions"><button className="btn" type="submit">提交预约</button><p className="form-note">提交后我们会在 30 分钟内电话确认到店时段。</p></div></form>
          </div>
        </section>
      </main>
      <footer className="footer"><div className="footer-inner"><span>© 2026 毛孩子洗护馆</span><span>宠物洗护 · 美容造型 · 日常护理</span></div></footer>
    </>
  );
}

