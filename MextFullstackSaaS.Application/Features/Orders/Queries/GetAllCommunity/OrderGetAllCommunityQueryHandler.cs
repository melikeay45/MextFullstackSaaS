using MediatR;
using MextFullstackSaaS.Application.Common.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MextFullstackSaaS.Application.Features.Orders.Queries.GetAllCommunity
{
    public class OrderGetAllCommunityQueryHandler : IRequestHandler<OrderGetAllCommunityQuery, List<string>>
    {
        private readonly IApplicationDbContext _applicationDbContext;

        public OrderGetAllCommunityQueryHandler(IApplicationDbContext applicationDbContext)
        {
            _applicationDbContext = applicationDbContext;
        }

        public Task<List<string>> Handle(OrderGetAllCommunityQuery request, CancellationToken cancellationToken)
        {
            return _applicationDbContext
                .Orders
                .AsNoTracking()
                .SelectMany(x => x.Urls)
                .ToListAsync(cancellationToken);
        }
    }
}
