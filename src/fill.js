const info = {
  name: "",
  email: "",
  phone: null,
  location: 0,
  autoSubmit: false
};

chrome.storage.sync.get(
  ["name", "email", "phone", "location", "autoSubmit"],
  values => {
    info.name = values.name ? values.name : "";
    info.email = values.email ? values.email : "";
    info.phone = values.phone ? values.phone : "";
    info.location = values.location ? values.location : 0;
    info.autoSubmit = values.autoSubmit ? true : false;
  }
);

$(function() {
  const inputs = $("input").filter((i, el) => {
    return $(el).attr("type") != "hidden";
  });
  if (inputs.length === 0) {
    Location.reload();
  }
  if (inputs.length === 3) {
    // フォームがクローズしている場合の処理
    // $(inputs[0]).prop("checked", true);
    // $(inputs[1]).val(info.email);
    // if (info.autoSubmit) {
    //   document.forms[0].submit();
    // }
  } else {
    $(inputs[0]).val(info.name);
    $(inputs[1]).val(info.email);
    $(inputs[2]).val(info.phone);
    $(inputs[3 + parseInt(info.location)]).prop("checked", true);
    $(inputs[7]).prop("checked", true);
    if (info.autoSubmit) {
      console.log(document.forms);
      const form = document.forms[0];
      form.submit();
    }
  }
});
