﻿using System.ComponentModel.DataAnnotations;

namespace GZCTF.Models.Request.Account;

/// <summary>
/// 基本账号信息更改
/// </summary>
public class ProfileUpdateModel
{
    /// <summary>
    /// 用户名
    /// </summary>
    [MinLength(3, ErrorMessage = "用户名过短")]
    [MaxLength(15, ErrorMessage = "用户名过长")]
    public string? UserName { get; set; }

    /// <summary>
    /// 描述
    /// </summary>
    [MaxLength(55, ErrorMessage = "描述过长")]
    public string? Bio { get; set; }

    /// <summary>
    /// 手机号
    /// </summary>
    [Phone(ErrorMessage = "手机号格式错误")]
    public string? Phone { get; set; }

    /// <summary>
    /// 真实姓名
    /// </summary>
    [MaxLength(7, ErrorMessage = "真实姓名过长")]
    public string? RealName { get; set; }

    /// <summary>
    /// 一卡通号
    /// </summary>
    [MaxLength(24, ErrorMessage = "一卡通号过长")]
    public string? StdNumber { get; set; }
    
    /// <summary>
    /// QQ 号
    /// </summary>
    [MaxLength(11, ErrorMessage = "QQ 号过长")]
    public string? QqNumber { get; set; }
}