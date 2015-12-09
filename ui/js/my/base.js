/**
 * Created by ligson on 2015/12/9.
 * base
 */
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
                        message: '密码禁止为空！'
                    }
                }
            },
            password2: {
                validators: {
                    notEmpty: {
                        message: '密码禁止为空！'
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