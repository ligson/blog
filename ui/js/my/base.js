/**
 * Created by ligson on 2015/12/9.
 * base
 */

BootstrapDialog.DEFAULT_TEXTS[BootstrapDialog.TYPE_DEFAULT] = '信息提示';
BootstrapDialog.DEFAULT_TEXTS[BootstrapDialog.TYPE_INFO] = '信息提示';
BootstrapDialog.DEFAULT_TEXTS[BootstrapDialog.TYPE_PRIMARY] = '信息提示';
BootstrapDialog.DEFAULT_TEXTS[BootstrapDialog.TYPE_SUCCESS] = '成功';
BootstrapDialog.DEFAULT_TEXTS[BootstrapDialog.TYPE_WARNING] = '警告';
BootstrapDialog.DEFAULT_TEXTS[BootstrapDialog.TYPE_DANGER] = '危险';
BootstrapDialog.DEFAULT_TEXTS['OK'] = '确定';
BootstrapDialog.DEFAULT_TEXTS['CANCEL'] = '取消';
BootstrapDialog.DEFAULT_TEXTS['CONFIRM'] = '确认';

window.alert = function (msg) {
    BootstrapDialog.alert(msg);
};
$(function () {
    $("#login_form").bootstrapValidator({
        message: '输入格式不正确！',
        feedbackIcons: {
            //valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            name: {
                message: '请输入邮箱地址或者手机号',
                validators: {
                    notEmpty: {
                        message: '该项不能为空!'
                    },
                    regexp: {
                        regexp: /(^1\d{10}$)|(^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$)/,
                        message: "请输入手机号或者邮箱地址!"
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: '密码禁止为空！'
                    }
                }
            }
        }
    });
    $("#reg_form").bootstrapValidator({
        message: '输入格式不正确！',
        feedbackIcons: {
            //valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            nickName: {
                message: '请输入用户昵称',
                validators: {
                    notEmpty: {
                        message: '昵称该项不能为空!'
                    }
                }
            },
            mobile: {
                message: '手机号格式不正确',
                validators: {
                    regexp: {
                        regexp: /^1\d{10}$/,
                        message: "请输入正确格式的手机号!"
                    }
                }
            },
            email: {
                message: '邮箱格式不正确',
                validators: {
                    notEmpty: {
                        message: '邮箱不能为空!'
                    },
                    regexp: {
                        regexp: /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/,
                        message: "请输入正确格式的邮箱地址!"
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: '密码不能为空！'
                    }
                }
            },
            password2: {
                validators: {
                    notEmpty: {
                        message: '不能为空！'
                    },
                    identical: {
                        field: 'password',
                        message: '两次密码不一致!'
                    }
                }
            }
        }
    });
});