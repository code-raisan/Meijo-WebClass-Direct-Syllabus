javascript:
(() =>{
  if(location.hostname !== "rpwebcls.meijo-u.ac.jp") return alert("名城大学WebClass以外では使用できません");
  if(!location.pathname.startsWith("/webclass/course.php")) return alert("コースを開いてから使用してください");
  const webclassid = location.pathname.split("course.php")[1].replaceAll("/", "");
  const year = webclassid.slice(0, 4);
  const semester = Number(webclassid.slice(4, 6));
  const classid = webclassid.slice(6, 12);
  const params = `value(risyunen)=${year}&value(semekikn)=${semester}&value(kougicd)=${classid}`;
  window.open(`https://gkmsyllabus.meijo-u.ac.jp/camweb/slbssbdr.do?${params}`);
})();
