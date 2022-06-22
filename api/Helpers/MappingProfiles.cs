using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos;
using AutoMapper;
using Core.Entities;

namespace api.Helpers
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Product, ProductToReturnDto>()
                .ForMember(x => x.ProductType, x => x.MapFrom(x => x.ProductType.Name))
                .ForMember(x => x.ProductBrand, x => x.MapFrom(x => x.ProductBrand.Name))
                .ForMember(x => x.PictureUrl, x => x.MapFrom<ProductUrlResolver>());
        }
    }
}