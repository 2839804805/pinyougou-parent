package com.pinyougou.manager.controller;

import com.alibaba.dubbo.config.annotation.Reference;
import com.pinyougou.pojo.TbBrand;
import com.pinyougou.sellergoods.service.BrandService;
import entity.PageRresult;
import entity.Result;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/brand")
public class BrandController {
    @Reference
    private BrandService brandService;

    /**
     * 全部查询
     * @return
     */
    @RequestMapping("/findAll")
    public List<TbBrand>findAll(){
        return brandService.findAll();
    }

    /**
     * 分页查询
     * @param page
     * @param size
     * @return
     */
    @RequestMapping("/findPage")
    public PageRresult findPage(int page,int size){
        return brandService.findPage(page,size);

    }

    /**
     * 添加方法
     * @param tbBrand
     * @return
     */
    @RequestMapping("/add")
    public Result add(@RequestBody TbBrand tbBrand){

        try {
            brandService.add(tbBrand);
            return new Result(true,"操作成功!");
        } catch (Exception e) {
            e.printStackTrace();
            return new Result(false,"操作失败!");
        }
    }
    /**
     * 单个查询
     */
    @RequestMapping("/findOne")
    public TbBrand findOne(Long id){
       return brandService.findOne(id);
    }
    /**
     * 修改
     */
    @RequestMapping("/update")
    public Result update(@RequestBody TbBrand tbBrand){
        try {
            brandService.update(tbBrand);
            return new Result(true,"操作成功!");
        } catch (Exception e) {
            e.printStackTrace();
            return new Result(false,"操作失败!");
        }
    }
    /**
     * 删除
     */
    @RequestMapping("/delete")
    public Result delete(Long []id){
        try {
            brandService.delete(id);
            return new Result(true,"操作成功!");
        } catch (Exception e) {
            e.printStackTrace();
            return new Result(false,"操作失败!");
        }
    }

    @RequestMapping("/search")
    public PageRresult search(@RequestBody TbBrand tbBrand,int page,int size){
      return brandService.findPage(tbBrand,page,size);
    }

    @RequestMapping("/selectOption")
    public List<Map> selectOption(){
        return brandService.selectOption();
    }
}
